import {
  collection,
  getDocs,
  where,
  query,
  getDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { auth, db } from '../firebase.js';
import { useState } from 'react';

// Count All Articles Pending for Approval
// Fetches All Pending Articles Document ID with Details
export async function fetchAllPendingArticlesWithDocID() {
  try {
    const articleCollection = collection(db, 'articles');
    // Fetch documents that are pending, not archived
    const filteredDocuments = await articleCollection
      .where('isApproved', '==', false)
      .where('isArchived', '==', false)
      .get();
    const articlesData = [];
    // Loop through the documents
    for (const doc of filteredDocuments.docs) {
      const articleDoc = doc.data();
      // Convert Timestamp to Date for readable format
      // Check if datePosted is not null before converting to Date
      if (articleDoc.datePosted) {
        articleDoc.datePosted =
          articleDoc.datePosted.toDate();
      }
      // Check if dateCreated is not null before converting to Date
      if (articleDoc.dateCreated) {
        articleDoc.dateCreated =
          articleDoc.dateCreated.toDate();
      }
      // Add document ID to the article data
      articleDoc.documentID = doc.id;
      // Push the article data to the array
      articlesData.push(articleDoc);
    }
    return articlesData;
  } catch (error) {
    console.error(
      'Error fetching Pending Articles with Details',
      error,
    );
    throw error;
  }
}

export async function fetchPostedArticles() {
  try {
    const colRef = collection(db, 'articles');
    const q = query(
      colRef,
      where('isApproved', '==', true),
    );
    const postedArticlesSnapshot = await getDocs(q);
    // Extract admin data from the snapshot
    const articlesData = [];
    postedArticlesSnapshot.forEach((doc) => {
      articlesData.push({ data: doc.data(), id: doc.id });
    });
    return articlesData;
  } catch (error) {
    console.error(
      'Error fetching login credentials',
      error,
    );
    throw error;
  }
}
