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
    const filteredDocuments = await articleCollection
      .where('isApproved', '==', false)
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
      where('isPostApproved', '==', true),
      // where('isArchived', '==', false),
      // where('isArchivedApproved', '==', false),
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
    const q = query(
      colRef,
      where('isPostApproved', '==', false),
      where('isEdited', '==', false),
      where('isArchived', '==', false),
    );
    const q2 = query(
      colRef,
      where('isEditApproved', '==', false),
      where('isEdited', '==', true),
      where('isPostApproved', '==', true),
    );
    const q3 = query(
      colRef,
      where('isArchiveApproved', '==', false),
      where('isArchived', '==', true),
      where('isPostApproved', '==', true),
    );

    const postArticlesSnapshot = await getDocs(q);
    const editArticlesSnapshot = await getDocs(q2);
    const archiveArticlesSnapshot = await getDocs(q3);

    // Extract admin data from the snapshot
    const articlesData = [];
    postArticlesSnapshot.forEach((doc) => {
      console.log(doc);
      articlesData.push({ data: doc.data(), id: doc.id });
    });
    editArticlesSnapshot.forEach((doc) => {
      console.log(doc);
      articlesData.push({ data: doc.data(), id: doc.id });
    });
    archiveArticlesSnapshot.forEach((doc) => {
      console.log(doc);
      articlesData.push({ data: doc.data(), id: doc.id });
    });

    const uniqueArticlesData = [
      ...new Map(
        articlesData.map((item) => [item.id, item]),
      ).values(),
    ];
    return uniqueArticlesData;
  } catch (error) {
    console.error(
      'Error fetching login credentials',
      error,
    );
    throw error;
  }
}

export async function fetchPendingArticles2() {
  try {
    const colRef = collection(db, 'articles');
    const q = query(
      colRef,
      where('isApproved', '==', false),
    );

    const postArticlesSnapshot = await getDocs(q);

    // Extract admin data from the snapshot
    const articlesData = [];
    postArticlesSnapshot.forEach((doc) => {
      console.log(doc);
      articlesData.push({ data: doc, id: doc.id });
    });

    console.log(articlesData);
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
export async function searchArticleByTitle(
  keyword = '',
  type = 'Posted',
) {
  try {
    if (keyword == '' || keyword == null) {
      if (type == 'Posted') {
        Results = await fetchPostedArticles();
      } else {
        Results = await fetchArchivedPost();
      }
      return Results;
    }
    let bool = '';
    if (type === 'Posted') {
      bool = 'isPostApproved';
    } else {
      bool = 'isArchived';
    }
    const articleCollection = collection(db, 'articles');
    // Fetch all articles
    const snapshot = await getDocs(articleCollection);
    // Extract articles data from the snapshot
    const matchingArticles = [];
    snapshot.forEach((doc) => {
      const articleData = doc.data();
      console.log(articleData);
      // Check if the lowercase title contains the lowercase keyword
      if (
        articleData.title
          .toLowerCase()
          .includes(keyword.toLowerCase()) &&
        articleData[bool] === true
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
export async function getCurrentPendingArticleCount(
  searchQuery = '',
) {
  try {
    // const articleCollection = collection(db, 'articles');
    // const q = query(
    //   articleCollection,
    //   where('isApproved', '==', false),
    // );
    // const pendingArticlesSnapshot1 = await getDocs(q);

    // const pendingArticlesSnapshot3 = [
    //   ...pendingArticlesSnapshot1.docs,
    // ];

    // const uniqueResults = Array.from(
    //   new Set(pendingArticlesSnapshot3.map((a) => a.id)),
    // ).map((id) => {
    //   return pendingArticlesSnapshot3.find(
    //     (a) => a.id === id,
    //   );
    // });
    let uniqueResults;

    if (searchQuery && searchQuery !== '') {
      // If there's a search query, fetch the articles based on the search query
      uniqueResults =
        await searchArticleByTitle(searchQuery);
    } else {
      // Otherwise, fetch all posted articles
      uniqueResults = await fetchPendingArticles();
    }

    console.log('API Response:', uniqueResults);

    // Return the count of articles
    return uniqueResults.length;
  } catch (error) {
    console.error(
      'Error getting pending articles count:',
      error,
    );
    throw error;
  }
}

export async function getCurrentPostedArticleCount(
  searchQuery = '',
) {
  try {
    let uniqueResults;

    if (searchQuery && searchQuery !== '') {
      // If there's a search query, fetch the articles based on the search query
      uniqueResults = await searchArticleByTitle(
        searchQuery,
        'Posted',
      );
    } else {
      // Otherwise, fetch all posted articles
      uniqueResults = await fetchPostedArticles();
    }

    console.log('API Response:', uniqueResults);

    // Return the count of articles
    return uniqueResults.length;
  } catch (error) {
    console.error(
      'Error getting posted articles count:',
      error,
    );
    throw error;
  }
}

export async function getCurrentArchivedArticleCount(
  searchQuery = '',
) {
  try {
    let uniqueResults;

    if (searchQuery && searchQuery !== '') {
      // If there's a search query, fetch the articles based on the search query
      uniqueResults = await searchArticleByTitle(
        searchQuery,
        'Archived',
      );
    } else {
      // Otherwise, fetch all posted articles
      uniqueResults = await fetchArchivedPost();
    }

    console.log('API Response:', uniqueResults);

    // Return the count of articles
    return uniqueResults.length;
  } catch (error) {
    console.error(
      'Error getting posted articles count:',
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
      titleEdit: '',
      bodyEdit: '',
      imageEdit: '',
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
      isEdited: false,
      isEditApproved: false,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function approvePostArticlebyID(id) {
  const dateTime = new Date();
  try {
    const docRef = doc(db, 'articles', id);
    updateDoc(docRef, {
      datePosted: dateTime,
      isPostApproved: true,
      isArchived: false,
      isArchiveApproved: false,
      isEdited: false,
      isEditedApproved: false,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function rejectPostArticlebyID(id) {
  try {
    const docRef = doc(db, 'articles', id);
    updateDoc(docRef, {
      datePosted: '',
      isPostApproved: false,
      isArchived: true,
      isArchiveApproved: true,
      isEdited: false,
      isEditedApproved: false,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function approveEditArticlebyID(id, document) {
  const dateTime = new Date();
  try {
    const docRef = doc(db, 'articles', id);
    updateDoc(docRef, {
      isPostApproved: true,
      isArchived: false,
      isArchiveApproved: false,
      isEdited: false,
      isEditedApproved: false,
      dateEdited: dateTime,
      title:
        document.titleEdit != ''
          ? document.titleEdit
          : document.title,
      body:
        doc.bodyEdit != ''
          ? document.bodyEdit
          : document.body,
      image:
        doc.imageEdit != ''
          ? document.imageEdit
          : document.image,
      titleEdit: '',
      bodyEdit: '',
      imageEdit: '',
    });
  } catch (error) {
    console.log(error);
  }
}

export async function rejectEditArticlebyID(id, document) {
  const dateTime = new Date();
  try {
    const docRef = doc(db, 'articles', id);
    updateDoc(docRef, {
      isPostApproved: true,
      isArchived: false,
      isArchiveApproved: false,
      isEdited: false,
      isEditedApproved: false,
      dateEdited: dateTime,
      title: document.title,
      body: document.body,
      image: document.image,
      titleEdit: '',
      bodyEdit: '',
      imageEdit: '',
    });
  } catch (error) {
    console.log(error);
  }
}

export async function approveArchiveArticlebyID(id) {
  try {
    const docRef = doc(db, 'articles', id);
    updateDoc(docRef, {
      isPostApproved: false,
      isArchived: true,
      isArchiveApproved: true,
      isEdited: false,
      isEditedApproved: false,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function rejectArchiveArticlebyID(id) {
  try {
    const docRef = doc(db, 'articles', id);
    updateDoc(docRef, {
      isPostApproved: true,
      isArchived: false,
      isArchiveApproved: false,
      isEdited: false,
      isEditedApproved: false,
    });
  } catch (error) {
    console.log(error);
  }
}
