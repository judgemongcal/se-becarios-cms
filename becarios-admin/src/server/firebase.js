// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAlIS7nmCaYzvKKg818jGvQqJWjaBLGR3U',
  authDomain: 'project-best-cms.firebaseapp.com',
  projectId: 'project-best-cms',
  storageBucket: 'project-best-cms.appspot.com',
  messagingSenderId: '777370033183',
  appId: '1:777370033183:web:bd710e702e7b84c5b8492a',
  measurementId: 'G-VYNX38BF9P',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

// Initialize Firestore Services
export const db = getFirestore(app);
export const storage = getStorage(app);

export async function getUserInfo(email, user) {
  const colRef = collection(db, 'admin_credentials'); // Collection Ref
  let admins;
  // if (!user || user === '') {
  //   throw new Error('User not authenticated');
  // }

  // Get Collection Data

  admins = [];
  const snapshot = await getDocs(colRef);
  snapshot.docs.map((doc) => {
    admins.push({ ...doc.data(), id: doc.id });
    // console.log(doc);
  });

  const selected = admins.find(
    (admin) => admin.email === email,
  );

  return selected;
}
