import express from 'express';
import multer from 'multer';
import * as fs from 'fs';
import cors from 'cors';
import { db, storage } from './firebase.js';
import { fetchArticles } from './API/GlobalAPI.js';
import {
  initializeApp,
  applicationDefault,
} from 'firebase-admin/app';
import firebaseAdmin from 'firebase-admin';
import { UserRecord, getAuth } from 'firebase-admin/auth';
import { getDatabase } from 'firebase-admin/database';
import bodyParser from 'body-parser';
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';

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

app.use(
  bodyParser.urlencoded({
    limit: '25mb',
    extended: false,
  }),
);
app.use(bodyParser.json({ limit: '25mb' }));

//handles upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// FETCH ARTICLES

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

// ADD ADMIN AUTH
app.post('/add-admin-auth', async (req, res) => {
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

// ADD ADMIN CREDENTIALS
app.post(
  '/add-admin-credentials',
  upload.single('admin-image'),
  async (req, res) => {
    console.log(req.body);
    const dateTime = new Date();
    const {
      contactNumber,
      email,
      firstName,
      lastName,
      role,
    } = req.body;
    console.log(req.file);
    try {
      const storageRef = ref(
        storage,
        `admin_photos/${req.file + dateTime}`,
      );
      let metadata = {};
      if (req.file) {
        metadata = { contentType: req.file.type };
      } else {
        console.log('No File Uploaded');
      }

      const snapshot = await uploadBytesResumable(
        storageRef,
        req.file.buffer,
        metadata,
      );
      const downloadURL = await getDownloadURL(
        snapshot.ref,
      );

      await addDoc(collection(db, 'admin_credentials'), {
        contactNumber: contactNumber || null,
        email: email || null,
        firstName: firstName || null,
        image: downloadURL || null,
        lastName: lastName || null,
        role: role || null,
      })
        .then(() => {
          console.log('Doc written successfully');
        })
        .catch((error) => {
          console.log(`Error in writing doc: ${error}`);
        });

      return res.send({
        message: 'file uploaded to firebase storage',
        name: req.image,
        type: req.image,
        downloadURL: downloadURL,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send(error.message);
    }
  },
);

// Server Status Checker
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
