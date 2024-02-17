import { db } from '../firebase.js';
import {
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';

export async function fetchArticles() {
  try {
    const articleSnapshot = await db
      .collection('articles')
      .get();

    return articleSnapshot;
  } catch (error) {
    console.log(error);
  }
}

// Fetch Articles by Alphabetical Order
export async function fetchAllPostedArticlesAZ(
  sortOrder = 'asc',
  type = 'Posted',
) {
  try {
    const colRef = collection(db, 'articles');
    let q;

    if (type === 'Posted') {
      q = query(
        colRef,
        where('isApproved', '==', true),
        where('isArchived', '==', false),
      );
    } else {
      q = query(colRef, where('isArchived', '==', true));
    }

    const filteredArticlesSnapshot = await getDocs(q);

    const allPostedArticles = [];

    filteredArticlesSnapshot.forEach((doc) => {
      console.log('Document ID:', doc.id);
      console.log('Document Data:', doc.data().title);
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
  type = 'Posted',
) {
  try {
    const colRef = collection(db, 'articles');
    let q;

    if (type === 'Posted') {
      q = query(
        colRef,
        where('isApproved', '==', true),
        where('isArchived', '==', false),
      );
    } else {
      q = query(colRef, where('isArchived', '==', true));
    }

    const filteredArticlesSnapshot = await getDocs(q);

    const allPostedArticles = [];
    let dateToUse;

    filteredArticlesSnapshot.forEach((doc) => {
      console.log('Document ID:', doc.id);
      dateToUse =
        type === 'Posted'
          ? doc.data().datePosted
          : doc.data().dateArchived;
      console.log('dateToUse:', dateToUse);
      allPostedArticles.push({
        data: doc.data(),
        id: doc.id,
        dateToUse,
      });
      console.log('Doc:', doc.data());
    });

    console.log('test: ', dateToUse);
    // Sort the array based on datePosted
    if (sortOrder === 'asc') {
      allPostedArticles.sort((a, b) => {
        const dateA = a.dateToUse
          ? a.dateToUse.toMillis()
          : Number.MAX_SAFE_INTEGER;
        const dateB = b.dateToUse
          ? b.dateToUse.toMillis()
          : Number.MAX_SAFE_INTEGER;
        return dateA - dateB;
      });
    } else {
      allPostedArticles.sort((a, b) => {
        const dateA = a.dateToUse
          ? a.dateToUse.toMillis()
          : 0;
        const dateB = b.dateToUse
          ? b.dateToUse.toMillis()
          : 0;
        return dateB - dateA;
      });
    }

    // For Testing
    console.log(
      'Fetched Sorted Articles By Date:',
      allPostedArticles.map((article) => article.dateToUse),
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

// Fetches articles according to title
export async function searchArticleByTitle(
  keyword = '',
  type,
) {
  try {
    const colRef = collection(db, 'articles');
    let q;

    if (type === 'Posted') {
      q = query(
        colRef,
        where('isApproved', '==', true),
        where('isArchived', '==', false),
      );
    } else {
      q = query(colRef, where('isArchived', '==', true));
    }
    const filteredArticlesSnapshot = await getDocs(q);

    const allMatchingArticles = [];

    filteredArticlesSnapshot.forEach((doc) => {
      // Check if the lowercase title contains the lowercase keyword
      if (
        doc
          .data()
          .title.toLowerCase()
          .includes(keyword.toLowerCase())
      ) {
        console.log('Document ID:', doc.id);
        console.log('Document Title:', doc.data().title);
        allMatchingArticles.push({
          data: doc.data(),
          id: doc.id,
        });
      }
    });

    // For Testing
    console.log(
      'Fetched Matching Articles:',
      allMatchingArticles.map(
        (article) => article.data.title,
      ),
    );

    return allMatchingArticles;
  } catch (error) {
    console.error(
      'Error fetching matching articles',
      error,
    );
    throw error;
  }
}
