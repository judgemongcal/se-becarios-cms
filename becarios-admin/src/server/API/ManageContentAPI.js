import {
  collection,
  getDocs,
  where,
  query,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { auth, db } from '../firebase.js';
import { useState } from 'react';

// Count All Articles Pending for Approval
// Fetches All Pending Articles Document ID with Details
export async function fetchAllPendingArticlesWithDocID() {
  try {
    const articleCollection = collection(db, 'articles');
    // Fetch documents that are pending, not archived
    const queryPost = query(
      colRef,
      where('isPostApproved', '==', false),
      where('isEditApproved', '==', false),
      where('isArchiveApproved', '==', false),
      where('isEdited', '==', false),
      where('isArchived', '==', false),
    );
    const queryEdit = query(
      colRef,
      where('isEditApproved', '==', false),
      where('isEdited', '==', true),
      where('isPostApproved', '==', true),
    );
    const queryArchive = query(
      colRef,
      where('isArchiveApproved', '==', false),
      where('isArchived', '==', true),
    );
    const postArticlesSnapshot = await getDocs(queryPost);
    const editArticlesSnapshot = await getDocs(queryEdit);
    const archiveArticlesSnapshot =
      await getDocs(queryArchive);

    const postArticles = postArticlesSnapshot.docs.map(
      (doc) => doc.data(),
    );
    const editArticles = editArticlesSnapshot.docs.map(
      (doc) => doc.data(),
    );
    const archiveArticles =
      archiveArticlesSnapshot.docs.map((doc) => doc.data());

    const allArticles = [
      ...postArticles,
      ...editArticles,
      ...archiveArticles,
    ];

    const uniqueArticlesSet = new Set(
      allArticles.map((article) => JSON.stringify(article)),
    );
    const uniqueArticles = Array.from(
      uniqueArticlesSet,
    ).map((article) => JSON.parse(article));

    const articlesData = [];
    // Loop through the documents
    for (const doc of uniqueArticles.docs) {
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
      where('isPostApproved', '==', true),
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

export async function fetchPendingArticles() {
  try {
    const colRef = collection(db, 'articles');
    const queryPost = query(
      colRef,
      where('isPostApproved', '==', false),
      where('isEditApproved', '==', false),
      where('isArchiveApproved', '==', false),
      where('isEdited', '==', false),
      where('isArchived', '==', false),
    );
    const queryEdit = query(
      colRef,
      where('isEditApproved', '==', false),
      where('isEdited', '==', true),
      where('isPostApproved', '==', true),
    );
    const queryArchive = query(
      colRef,
      where('isArchiveApproved', '==', false),
      where('isArchived', '==', true),
    );
    const postArticlesSnapshot = await getDocs(queryPost);
    const editArticlesSnapshot = await getDocs(queryEdit);
    const archiveArticlesSnapshot =
      await getDocs(queryArchive);

    const postArticles = postArticlesSnapshot.docs.map(
      (doc) => doc.data(),
    );
    const editArticles = editArticlesSnapshot.docs.map(
      (doc) => doc.data(),
    );
    const archiveArticles =
      archiveArticlesSnapshot.docs.map((doc) => doc.data());

    const allArticles = [
      ...postArticles,
      ...editArticles,
      ...archiveArticles,
    ];

    // const uniqueArticlesSet = new Set(
    //   allArticles.map((article) => JSON.stringify(article)),
    // );
    // const uniqueArticles = Array.from(
    //   uniqueArticlesSet,
    // ).map((article) => JSON.parse(article));
    // Extract admin data from the snapshot
    const articlesData = [];
    allArticles.forEach((doc) => {
      console.log('Doc: ' + doc);
      articlesData.push({ data: doc, id: doc.id });
      console.log(doc.data);
    });

    console.log(articlesData);
    console.log(
      'articles data length: ' + articlesData.length,
    );
    return articlesData;
  } catch (error) {
    console.error(
      'Error fetching article credentials',
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
      where('isArchiveApproved', '==', true),
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
    const colRef = collection(db, 'articles');
    const queryPost = query(
      colRef,
      where('isPostApproved', '==', false),
      where('isEditApproved', '==', false),
      where('isArchiveApproved', '==', false),
      where('isEdited', '==', false),
      where('isArchived', '==', false),
    );
    const queryEdit = query(
      colRef,
      where('isEditApproved', '==', false),
      where('isEdited', '==', true),
      where('isPostApproved', '==', true),
    );
    const queryArchive = query(
      colRef,
      where('isArchiveApproved', '==', false),
      where('isArchived', '==', true),
    );
    const postArticlesSnapshot = await getDocs(queryPost);
    const editArticlesSnapshot = await getDocs(queryEdit);
    const archiveArticlesSnapshot =
      await getDocs(queryArchive);

    const postArticles = postArticlesSnapshot.docs.map(
      (doc) => doc.data(),
    );
    const editArticles = editArticlesSnapshot.docs.map(
      (doc) => doc.data(),
    );
    const archiveArticles =
      archiveArticlesSnapshot.docs.map((doc) => doc.data());

    const allArticles = [
      ...postArticles,
      ...editArticles,
      ...archiveArticles,
    ];

    const uniqueArticlesSet = new Set(
      allArticles.map((article) => JSON.stringify(article)),
    );
    const uniqueArticles = Array.from(
      uniqueArticlesSet,
    ).map((article) => JSON.parse(article));
    // const pendingArticlesSnapshot1 = await getDocs(q);

    // const pendingArticlesSnapshot3 = [
    //   ...pendingArticlesSnapshot1.docs,
    // ];

    const uniqueResults = Array.from(
      new Set(uniqueArticles.map((a) => a.id)),
    ).map((id) => {
      return uniqueArticles.find((a) => a.id === id);
    });

    console.log('unique! ' + uniqueResults.length);
    // Return the count of pending articles
    return uniqueResults.length;
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

export async function archiveArticlebyID(id, role) {
  try {
    const docRef = doc(db, 'articles', id);
    updateDoc(docRef, {
      isArchived: true,
      isArchiveApproved: role === 'Super Admin',
    });
    const dataToUpdate = {
      dateArchived: serverTimestamp(),
      isPostApproved: false,
    };
    if (role === 'Super Admin') {
      // Perform the update
      updateDoc(docRef, dataToUpdate)
        .then(() => {
          console.log(
            'Document successfully archived with current timestamp!',
          );
        })
        .catch((error) => {
          console.error('Error updating document:', error);
        });
    } else {
      // Handle the case where the role is not 'Super Admin'
      console.log(
        'You do not have permission to perform this action.',
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteArticlebyID(id) {
  try {
    const docRef = doc(db, 'articles', id);
    await deleteDoc(docRef);
  } catch (error) {
    console.log(error);
  }
}

export async function retrieveArticlebyID(id, role) {
  console.log(id, role);
  try {
    const docRef = doc(db, 'articles', id);
    updateDoc(docRef, {
      isArchived: false,
      isPostApproved: role === 'Super Admin',
      isArchiveApproved: false,
    });
  } catch (error) {
    console.log(error);
  }
}
