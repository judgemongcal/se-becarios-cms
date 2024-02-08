import {
  collection,
  getDocs,
  where,
  query,
  getDoc,
  doc,
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
