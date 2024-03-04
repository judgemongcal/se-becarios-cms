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
import { auth, db, storage } from '../firebase.js';
import { useState } from 'react';
import {
  deleteObject,
  getDownloadURL,
  ref,
} from 'firebase/storage';
import fs from 'fs';
import os from 'os';
import path from 'path';
import fetch from 'cross-fetch';

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
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function deleteArticlebyID(id) {
  // try {
  //   const docRef = doc(db, 'articles', id);
  //   const desertRef = ref(storage, docRef.image);
  //   deleteObject(desertRef);
  //   await deleteDoc(docRef);

  //   return { success: true };
  // } catch (error) {
  //   console.log(error);
  //   return { success: false };
  // }

  try {
    const articleRef = doc(db, 'articles', id);
    const docSnapshot = await getDoc(articleRef);

    if (docSnapshot.exists()) {
      const articleData = docSnapshot.data();
      if (articleData && articleData.image) {
        // Specify a child reference to the image using .child()
        const imageRef = ref(storage, articleData.image);
        // Delete the image
        await deleteObject(imageRef);
      }

      // Delete the article document
      await deleteDoc(articleRef);

      return { success: true };
    } else {
      throw new Error('Article document does not exist');
    }
  } catch (error) {
    console.error('Error deleting article: ', error);
    return { success: false };
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
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
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

    return { success: true };
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
      dateArchived: serverTimestamp(),
    });

    return { success: true };
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

    return { success: true };
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

    return { success: true };
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

    return { success: true };
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

    return { success: true };
  } catch (error) {
    console.log(error);
  }
}

// // EXPORT RESOURCES
export async function fetchPostedArticlesAndCreateFiles() {
  const articleCollection = collection(db, 'articles');
  const postedArticlesQuery = query(
    articleCollection,
    where('isPostApproved', '==', true),
  );

  try {
    const dateDownload = new Date();
    const day = String(dateDownload.getDate()).padStart(
      2,
      '0',
    );
    const month = String(
      dateDownload.getMonth() + 1,
    ).padStart(2, '0'); // Month is zero-based
    const year = String(dateDownload.getFullYear());

    // Create the string in the desired format
    const dateString = `-${year}-${month}-${day}`;
    const snapshot = await getDocs(postedArticlesQuery);
    const homeDirectory = os.homedir();
    const downloadsDirectory = path.join(
      homeDirectory,
      `downloads/Becarios-Records${dateString}`,
    );

    if (!fs.existsSync(downloadsDirectory)) {
      fs.mkdirSync(downloadsDirectory);
    }

    for (const doc of snapshot.docs) {
      const article = doc.data();
      const { title, author, body, image } = article;

      const cleanedTitle = title.replace(/[^\w\s]/gi, '');
      const cleanedBody = body.replace(/<[^>]*>/g, '');
      const folderName = `${cleanedTitle}`; // Folder name includes cleaned title and date
      const articleDirectory = path.join(
        downloadsDirectory,
        folderName,
      );

      if (!fs.existsSync(articleDirectory)) {
        fs.mkdirSync(articleDirectory);
      }
      const { seconds, nanoseconds } = article.datePosted;
      const milliseconds =
        seconds * 1000 + nanoseconds / 1000000;
      const datePosted = new Date(milliseconds);
      // Write text content to a txt file
      const txtFilePath = path.join(
        articleDirectory,
        `${cleanedTitle}.txt`,
      );
      const fileContent = `Title: ${title}\nAuthor: ${author}\n\nBody: ${cleanedBody}\n\nDate Posted: ${datePosted}\nDate Downloaded: ${dateDownload}`;
      await fs.promises.writeFile(txtFilePath, fileContent);

      console.log(
        `File ${cleanedTitle}.txt created successfully in the ${folderName} directory.`,
      );

      // Download image file
      if (image) {
        const imageFileName = `${cleanedTitle}_image.jpg`;
        const imageFilePath = path.join(
          articleDirectory,
          imageFileName,
        );

        try {
          const imageDownloadURL = await getDownloadURL(
            ref(storage, image),
          );
          const imageResponse = await fetch(
            imageDownloadURL,
          );
          const imageBuffer = await imageResponse.buffer();

          await fs.promises.writeFile(
            imageFilePath,
            imageBuffer,
          );

          console.log(
            `Image ${imageFileName} downloaded successfully.`,
          );
        } catch (error) {
          console.error(
            `Error downloading image ${imageFileName}:`,
            error,
          );
        }
      }
    }
  } catch (error) {
    console.error('Error fetching posted articles:', error);
  }
}
