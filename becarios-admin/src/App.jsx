import { useState } from 'react';
import LoginForm from './components/global/LoginForm';

import './App.css';
import {
  ApprovePostModal,
  DeletePostModal,
  DeleteReqSuccessModal,
  EditPostModal,
  EditReqSuccessModal,
  PostReqSuccessModal,
  RejectPostModal,
  SignOutModal,
  SubmitPostModal,
} from './components/global/Modal';
import NavBar from './components/global/NavBar';

function App() {
  return (
    <>
      <LoginForm />
    </>
  );
}

export default App;
