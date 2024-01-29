import './firebase.js'; // Importing firebase.js here initializes Firebase
import express from 'express';
import cors from 'cors';
import * as api from './api.js'; // Import all functions from api.js

const app = express();
app.use(cors());

app.get('/admin-login', async (req, res) => {
  try {
    // Use the fetchLogin function to get login credentials
    const loginCredentialsSnapshot = await api.fetchLogin();

    // Extract loginCredentials from the snapshot
    const loginCredentials = [];
    loginCredentialsSnapshot.forEach((document) => {
      loginCredentials.push(document.data());
    });

    return res.status(200).json({ loginCredentials });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: 'Internal Server Error' });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

api
  .fetchAllAdmins()
  .then((admins) => {
    console.log('All Admins:', admins);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

api
  .fetchAllArticles()
  .then((articles) => {
    console.log('All Articles:', articles);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
