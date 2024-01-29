import admin from 'firebase-admin';
import * as fs from 'fs';

// Read the content of the JSON file
const serviceAccount = JSON.parse(
  fs.readFileSync('./serviceAccountKeys.json', 'utf8'),
);

// Initialize Firebase using the provided service account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Access the Firestore database
const db = admin.firestore();

// Check if Firebase is initialized
if (admin.apps.length === 0) {
  console.error('Firebase is not initialized');
} else {
  console.log('Firebase is initialized');
}

export { db };
