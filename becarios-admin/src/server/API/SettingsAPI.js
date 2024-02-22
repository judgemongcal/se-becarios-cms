import {
  collection,
  getDocs,
  where,
  query,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { auth, db } from '../firebase.js';
import { useState } from 'react';

export async function fetchAllAdmins() {
  try {
    const colRef = collection(db, 'admin_credentials');
    const q = query(colRef, where('role', '==', 'Admin'));
    const allAdminsSnapshot = await getDocs(q);
    // Extract admin data from the snapshot
    const allAdmins = [];
    allAdminsSnapshot.forEach((doc) => {
      allAdmins.push({ data: doc.data(), id: doc.id });
    });

    return allAdmins;
  } catch (error) {
    console.error(
      'Error fetching login credentials',
      error,
    );
    throw error;
  }
}

export async function fetchSuperAdmin() {
  try {
    const colRef = collection(db, 'admin_credentials');
    const q = query(
      colRef,
      where('role', '==', 'Super Admin'),
    );
    const superAdminSnapshot = await getDocs(q);
    // Extract admin data from the snapshot
    const superAdmin = [];
    superAdminSnapshot.forEach((doc) => {
      superAdmin.push({ data: doc.data(), id: doc.id });
    });
    return superAdmin;
  } catch (error) {
    console.error(
      'Error fetching login credentials',
      error,
    );
    throw error;
  }
}

export async function fetchAdminById(id) {
  try {
    const docRef = doc(db, 'admin_credentials', id);
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    return docData;
  } catch (error) {
    console.log('Error: ', error);
  }
}

export async function removeAdmin(adminID) {
  try {
    const adminCollection = db.collection(
      'admin_credentials',
    );
    const adminDoc = await adminCollection
      .doc(adminID)
      .get();

    if (adminDoc.exists) {
      // Document exists, proceed with deletion
      await adminCollection.doc(adminID).delete();
      console.log('Admin removed successfully');
    } else {
      // Document doesn't exist
      console.log('Admin not found');
    }
  } catch (error) {
    console.error('Error removing admin', error);
    throw error;
  }
}

// Turn Admin into Super Admin

export async function assignAsSuperAdmin(
  superAdminID,
  adminID,
) {
  const docRefSuperAdmin = doc(
    db,
    'admin_credentials',
    superAdminID,
  );
  const docRefAdmin = doc(db, 'admin_credentials', adminID);

  const superAdminData = {
    role: 'Super Admin',
  };

  const adminData = {
    role: 'Admin',
  };

  try {
    await updateDoc(docRefSuperAdmin, superAdminData);
    await updateDoc(docRefAdmin, adminData);
    setTimeout(function () {
      window.location.reload();
    }, 2000);
    console.log('Success!');
    return { success: true };
  } catch (error) {
    console.log(error);
  }
}
