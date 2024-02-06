import './Firebase.js'; // Importing firebase.js here initializes Firebase
import express from 'express';
import * as fs from 'fs';
import cors from 'cors';
import { db } from './Firebase.js';
import { fetchArticles } from './API/GlobalAPI.js';
import {
  initializeApp,
  applicationDefault,
} from 'firebase-admin/app';
import firebaseAdmin from 'firebase-admin';
import { UserRecord, getAuth } from 'firebase-admin/auth';
import { getDatabase } from 'firebase-admin/database';

const serviceAccount = JSON.parse(
  fs.readFileSync('./serviceAccountKeys.json', 'utf8'),
);

const firebaseApp = initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL:
    'https://www.project-best-cms.firebaseio.com',
});
const auth = getAuth(firebaseApp);
const database = getDatabase();
const app = express();
app.use(cors());
app.use(express.json());
const port = 5001;

app.get('/fetch-articles', async (req, res) => {
  try {
    const articleSnapshot = await fetchArticles();

    return articleSnapshot;
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Internal Server Error' });
  }
});

app.post('/add-admin', async (req, res) => {
  console.log(req.body);
  const {
    contactNumber,
    email,
    firstName,
    lastName,
    role,
  } = req.body;
  try {
    auth
      .createUser({
        contactNumber,
        email,
        firstName,
        image: null,
        lastName,
        role,
      })
      .then((UserRecord) => {
        console.log(
          'Successfully created new user: ',
          UserRecord.id,
        );
      });
    res.status(200).json('Successfully added');
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
