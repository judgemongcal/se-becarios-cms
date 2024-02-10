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

// GET FIREBASE ADMIN AUTH USER ID BY EMAIL
export async function getUserIdByEmail(email) {
  try {
    // Get the user record by email
    const userRecord = await auth.getUserByEmail(email);
    // Extract and return the user ID
    const userId = userRecord.uid;
    return userId;
  } catch (error) {
    console.log('Error getting user ID by email');
  }
}

// REMOVE A USER FROM FIREBASE AUTH
export async function removeUserAccount(userId) {
  try {
    // Get the user reference
    const user = await auth.getUser(userId);
    // Delete the user
    await auth.deleteUser(userId);
    console.log(`User ${userId} successfully removed`);
  } catch (error) {
    console.log('Error removing user account');
  }
}

// DELETE ADMIN

export async function removeAdminAndUser(email) {
  try {
    // Get Firebase Admin Authentication user ID by email
    const userId = await getUserIdByEmail(email);
    // Remove a user account on Firebase Authentication
    await removeUserAccount(userId);
    // Remove an Admin from the collection
    const adminCollection = db.collection(
      'admin_credentials',
    );
    const adminQuery = await adminCollection
      .where('email', '==', email)
      .get();
    if (!adminQuery.empty) {
      // Admin found, proceed with deletion
      const adminID = adminQuery.docs[0].id;
      await adminCollection.doc(adminID).delete();
      console.log('Admin removed successfully');
    } else {
      // Admin not found in the collection
      throw new Error('Admin not found');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
