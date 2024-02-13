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

// Fetch Articles by Alphabetical Order
export async function fetchAllPostedArticlesAZ(
  sortOrder = 'asc',
) {
  try {
    const colRef = collection(db, 'articles');
    const q = query(
      colRef,
      where('isApproved', '==', true),
      where('isArchived', '==', false),
    );

    const filteredArticlesSnapshot = await getDocs(q);

    const allPostedArticles = [];

    filteredArticlesSnapshot.forEach((doc) => {
      //console.log('Document ID:', doc.id);
      //console.log('Document Data:', doc.data().title);
      allPostedArticles.push({
        data: doc.data(),
        id: doc.id,
      });
    });

    allPostedArticles.sort((a, b) =>
      sortOrder === 'asc'
        ? a.data.title.localeCompare(b.data.title, 'en', {
            sensitivity: 'base',
          })
        : b.data.title.localeCompare(a.data.title, 'en', {
            sensitivity: 'base',
          }),
    );

    return allPostedArticles;
  } catch (error) {
    console.error(
      'Error fetching Posted Articles with Details',
      error,
    );
    throw error;
  }
}

// Fetch and Sort Articles by Chronological Order
export async function fetchAllPostedArticles09(
  sortOrder = 'asc',
) {
  try {
    const colRef = collection(db, 'articles');
    const q = query(
      colRef,
      where('isApproved', '==', true),
      where('isArchived', '==', false),
    );

    const filteredArticlesSnapshot = await getDocs(q);

    const allPostedArticles = [];

    filteredArticlesSnapshot.forEach((doc) => {
      console.log('Document ID:', doc.id);
      console.log('Document Date:', doc.data().datePosted);
      const datePosted = doc.data().datePosted;
      allPostedArticles.push({
        data: doc.data(),
        id: doc.id,
      });
    });

    // Sort the array based on datePosted
    if (sortOrder === 'asc') {
      allPostedArticles.sort((a, b) => {
        return (
          a.data.datePosted.toMillis() -
          b.data.datePosted.toMillis()
        );
      });
    } else {
      allPostedArticles.sort((a, b) => {
        return (
          b.data.datePosted.toMillis() -
          a.data.datePosted.toMillis()
        );
      });
    }
    // For Testing
    console.log(
      'Fetched Sorted Articles By Date:',
      allPostedArticles.map(
        (article) => article.data.datePosted,
      ),
    );

    return allPostedArticles;
  } catch (error) {
    console.error(
      'Error fetching Posted Articles with Details',
      error,
    );
    throw error;
  }
}
