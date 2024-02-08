import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase.js';

export async function fetchAllAdmins() {
  console.log('calling');

  try {
    const colRef = collection(db, 'admin_credentials');
    const allAdminsSnapshot = await getDocs(colRef);
    // Extract admin data from the snapshot
    const allAdmins = [];
    allAdminsSnapshot.forEach((doc) => {
      allAdmins.push(doc.data());
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
