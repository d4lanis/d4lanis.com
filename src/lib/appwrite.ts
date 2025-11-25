import { Client, Databases, ID } from 'appwrite';

// Initialize Appwrite client
const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || '');

// Initialize Databases service
const databases = new Databases(client);

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  phoneNumber?: string;
}

// Save contact form submission to Appwrite database
export const saveContactForm = async (formData: ContactFormData) => {
  const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
  const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
  
  console.log('Appwrite Configuration:', {
    endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId,
    collectionId
  });

  try {
    const response = await databases.createDocument({
      databaseId: databaseId,
      collectionId: collectionId,
      documentId: ID.unique(),
      data: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        phoneNumber: formData.phoneNumber || null,
        createdAt: new Date().toISOString(),
      }
    });
    console.log('Document created successfully:', response);
    return response;
  } catch (error) {
    console.error('Detailed Appwrite error:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      databaseId,
      collectionId
    });
    throw error;
  }
};

export { client, databases };
