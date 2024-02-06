import { db } from '../Firebase.js';

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
