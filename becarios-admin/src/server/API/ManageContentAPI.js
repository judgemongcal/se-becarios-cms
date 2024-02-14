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
      where('isArchived', '==', false),
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

export async function fetchArchivedPost() {
  try {
    const colRef = collection(db, 'articles');
    const q = query(
      colRef,
      where('isArchived', '==', true),
    );
    const archivedArticlesSnapshot = await getDocs(q);
    // Extract admin data from the snapshot
    const articlesData = [];
    archivedArticlesSnapshot.forEach((doc) => {
      console.log('Archived Document ID:', doc.id);
      console.log(
        'Archived Document Date:',
        doc.data().dateCreated,
      );
      articlesData.push({ data: doc.data(), id: doc.id });
    });
    return articlesData;
  } catch (error) {
    console.error('Error fetching archived post', error);
    throw error;
  }
}

// Fetches articles according to title
export async function searchArticleByTitle(keyword = '') {
  try {
    const articleCollection = collection(db, 'articles');
    // Fetch all articles
    const snapshot = await getDocs(articleCollection);
    // Extract articles data from the snapshot
    const matchingArticles = [];
    snapshot.forEach((doc) => {
      const articleData = doc.data();
      console.log(articleData);
      // Convert Timestamp to Date for readable format
      articleData.datePosted =
        articleData.datePosted.toDate();
      articleData.dateCreated =
        articleData.dateCreated.toDate();
      // Check if the lowercase title contains the lowercase keyword
      if (
        articleData.title
          .toLowerCase()
          .includes(keyword.toLowerCase()) &&
        articleData.isApproved === true
      ) {
        matchingArticles.push({
          data: doc.data(),
          id: doc.id,
        });
      }
    });
    return matchingArticles;
  } catch (error) {
    console.error('Error fetching articles', error);
    throw error;
  }
}

// Count All Articles Pending for Approval
export async function getCurrentPendingArticleCount() {
  try {
    const articleCollection = collection(db, 'articles');
    const q = query(
      articleCollection,
      where('isApproved', '==', false),
      where('isArchived', '==', false),
    );
    const pendingArticlesSnapshot = await getDocs(q);

    // Return the count of pending articles
    return pendingArticlesSnapshot.size;
  } catch (error) {
    console.error(
      'Error getting pending articles count:',
      error,
    );
    throw error;
  }
}

// Fetch Article by ID
export async function fetchArticleById(id) {
  try {
    const docRef = doc(db, 'articles', id);
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    return docData;
  } catch (error) {
    console.log('Error: ', error);
  }
}
