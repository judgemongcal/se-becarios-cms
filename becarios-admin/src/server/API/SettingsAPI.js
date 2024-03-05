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
import { auth, db, storage } from '../firebase.js';
import { useState } from 'react';
// import { storage } from 'firebase-admin';
import { createObjectCsvStringifier } from 'csv-writer';
import { deleteObject, ref } from 'firebase/storage';

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

    const articleRef = doc(
      db,
      'admin_credentials',
      adminID,
    );
    const docSnapshot = await getDoc(articleRef);

    if (docSnapshot.exists()) {
      const adminData = adminDoc.data();
      if (adminData && adminData.image) {
        // Specify a child reference to the image using .child()
        console.log(adminData);
        const imageRef = ref(storage, adminData.image);
        // Delete the image
        await deleteObject(imageRef);
      } else {
        console.log('not found');
        throw new Error('No image');
      }
      // Document exists, proceed with deletion
      await adminCollection.doc(adminID).delete();
      console.log('Admin removed successfully');
    } else {
      // Document doesn't exist
      console.log('Admin not found');
      throw new Error('Admin not found');
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
    return { success: false };
  }
}

export async function downloadAuditTrailRecord(res) {
  try {
    // Ensure that db.collection is correctly accessed
    const auditTrailSnapshot = await getDocs(collection(db, 'audit-trail')); // Use getDocs to fetch the documents

    const auditTrailData = [];

    // Add data rows
    auditTrailSnapshot.forEach((doc) => { // Loop through snapshot
      const auditTrailEntry = doc.data();

      // Convert timestamp to Date format
      const date = auditTrailEntry.date ? formatDate(new Date(auditTrailEntry.date.seconds * 1000)) : '';

      const rowData = {
        'Action Subtype': auditTrailEntry.actionSubtype || '', // Handle potential missing values
        'Action Type': auditTrailEntry.actionType || '',
        'Date': date || '',
        'Description': auditTrailEntry.description || '',
        'User': auditTrailEntry.user || ''
      };
      auditTrailData.push(rowData);
    });

    // Create CSV string
    const csvStringifier = createObjectCsvStringifier({
      header: [
        { id: 'Action Subtype', title: 'Action Subtype' },
        { id: 'Action Type', title: 'Action Type' },
        { id: 'Date', title: 'Date' },
        { id: 'Description', title: 'Description' },
        { id: 'User', title: 'User' }
      ]
    });
    const csvContent = csvStringifier.getHeaderString() + csvStringifier.stringifyRecords(auditTrailData);

    // Set response headers
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=audit-trail.csv');

    // Send CSV content in the response
    res.status(200).send(csvContent);
  } catch (error) {
    console.error('Error downloading audit trail records:', error);
    throw error;
  }
}

function formatDate(date) {
  const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}
