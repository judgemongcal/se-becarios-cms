import './Firebase.js'; // Importing firebase.js here initializes Firebase
import express from 'express';
import cors from 'cors';
import { db } from './Firebase.js';
import { fetchArticles } from './API/GlobalAPI.js';

const app = express();
app.use(cors());

const port = 5001;

app.get('/add-admin', async (req, res) => {
  try {
    const articleSnapshot = await fetchArticles();

    return articleSnapshot;
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
