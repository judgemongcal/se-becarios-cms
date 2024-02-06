import './Firebase.js'; // Importing firebase.js here initializes Firebase
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const port = 5001;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
