import {
  collection,
  getDocs,
  where,
  query,
} from 'firebase/firestore';
import { auth, db } from '../firebase.js';

export async function fetchAllAdmins() {
  console.log('calling');

  try {
    const colRef = collection(db, 'admin_credentials');
    const q = query(colRef, where('role', '==', 'Admin'));
    const allAdminsSnapshot = await getDocs(q);
    // Extract admin data from the snapshot
    const allAdmins = [];
    allAdminsSnapshot.forEach((doc) => {
      allAdmins.push({ data: doc.data(), id: doc.id });
    });
    console.log(allAdmins);
    return allAdmins;
  } catch (error) {
    console.error(
      'Error fetching login credentials',
      error,
    );
    throw error;
  }
}
