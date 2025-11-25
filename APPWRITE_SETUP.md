# Appwrite Contact Form Setup Guide

This guide will help you configure your Appwrite database to receive contact form submissions from your portfolio website.

## Prerequisites

- An Appwrite Cloud account (sign up at https://cloud.appwrite.io/)
- Access to your project's environment variables

## Step 1: Create an Appwrite Project

1. Log in to [Appwrite Cloud Console](https://cloud.appwrite.io/)
2. Click on **"Create Project"**
3. Enter a project name (e.g., "d4lanis Portfolio")
4. Copy your **Project ID** - you'll need this later

## Step 2: Create a Database

1. In your project dashboard, navigate to **Databases** from the left sidebar
2. Click **"Create Database"**
3. Enter a database name (e.g., "portfolio")
4. Copy your **Database ID** - you'll need this later

## Step 3: Create a Collection for Contact Forms

1. Inside your database, click **"Create Collection"**
2. Enter collection name: `contacts`
3. Copy your **Collection ID** - you'll need this later
4. Click **"Create"**

## Step 4: Configure Collection Attributes

Add the following attributes to your `contacts` collection:

| Attribute Name | Type     | Size | Required | Default |
|---------------|----------|------|----------|---------|
| `name`        | String   | 255  | Yes      | -       |
| `email`       | String   | 255  | Yes      | -       |
| `message`     | String   | 5000 | Yes      | -       |
| `timestamp`   | DateTime | -    | Yes      | -       |
| `status`      | String   | 50   | No       | "new"   |

To add each attribute:
1. Click **"Create Attribute"**
2. Select the attribute type
3. Enter the attribute name
4. Set the size (for strings)
5. Check "Required" if needed
6. Set default value if applicable
7. Click **"Create"**

## Step 5: Configure Collection Permissions

To allow guests (unauthenticated users) to submit contact forms:

1. Go to the **Settings** tab of your collection
2. Scroll to **Permissions**
3. Click **"Add Role"**
4. Select **"Any"** (or "Guests" if you prefer)
5. Enable the **"Create"** permission
6. Click **"Update"**

**Security Note**: This allows anyone to create documents. Consider implementing rate limiting or CAPTCHA for production.

## Step 6: Configure Environment Variables

1. Copy `.env.example` to `.env` in your project root:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Appwrite credentials:
   ```env
   VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   VITE_APPWRITE_PROJECT_ID=your_project_id_here
   VITE_APPWRITE_DATABASE_ID=your_database_id_here
   VITE_APPWRITE_COLLECTION_ID=your_collection_id_here
   ```

3. Replace the placeholder values with your actual IDs from steps 1-3

## Step 7: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section on your site
3. Fill out the contact form and submit
4. Check your Appwrite Console under Databases → contacts collection
5. You should see a new document with the submitted data

## Optional: Set Up Indexes

For better query performance (if you plan to display submissions):

1. Go to the **Indexes** tab in your collection
2. Create an index on `timestamp` (descending) for sorting by date
3. Create an index on `status` for filtering by read/unread

## Optional: Set Up Webhooks

To receive notifications when someone submits the contact form:

1. Go to **Settings** → **Webhooks** in your project
2. Click **"Add Webhook"**
3. Enter a webhook URL (e.g., Zapier, Make.com, or your own endpoint)
4. Select events: `databases.*.collections.*.documents.*.create`
5. Filter by your collection ID if needed

## Viewing Submissions

You can view all contact form submissions in the Appwrite Console:

1. Navigate to **Databases** → Your Database → `contacts` collection
2. View all submitted documents with their data
3. Optionally, build an admin interface to manage submissions

## Database Schema Reference

```typescript
interface ContactDocument {
  $id: string;                    // Auto-generated unique ID
  $createdAt: string;             // Auto-generated timestamp
  $updatedAt: string;             // Auto-generated timestamp
  name: string;                   // Sender's name
  email: string;                  // Sender's email
  message: string;                // Message content
  timestamp: string;              // Submission timestamp (ISO 8601)
  status: string;                 // Status: "new" | "read" | "replied"
}
```

## Security Best Practices

1. **Rate Limiting**: Implement rate limiting to prevent spam (consider using Appwrite Functions)
2. **Validation**: The form validates on the client, but consider server-side validation
3. **Permissions**: Only allow "Create" permission for guests, not "Read", "Update", or "Delete"
4. **Monitoring**: Regularly check your database for spam or abuse
5. **Backup**: Set up regular backups of your database

## Troubleshooting

### Error: "Missing scope (scope: documents.write)"
- Check that you've added "Create" permission for "Any" or "Guests" role in collection permissions

### Error: "Document missing required attribute"
- Ensure all required attributes (name, email, message, timestamp) are being sent
- Verify attribute names match exactly in your collection

### Error: "Invalid document structure"
- Check that attribute types match (string, datetime, etc.)
- Verify attribute sizes are sufficient for the data

### Form submits but doesn't appear in database
- Check browser console for errors
- Verify environment variables are correctly set
- Ensure `.env` file is in the project root
- Restart your development server after changing `.env`

## Next Steps

- Consider adding email notifications when forms are submitted (using Appwrite Functions)
- Build an admin dashboard to manage contact submissions
- Add honeypot fields or CAPTCHA for spam protection
- Implement rate limiting using Appwrite Functions

## Support

For Appwrite-specific issues, consult:
- [Appwrite Documentation](https://appwrite.io/docs)
- [Appwrite Discord Community](https://appwrite.io/discord)
- [Appwrite GitHub](https://github.com/appwrite/appwrite)
