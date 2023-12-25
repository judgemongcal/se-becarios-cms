import { useState } from 'react';
import LoginForm from './components/LoginForm';

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
} from './components/Modal';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      {/* <LoginForm />
      <SignOutModal /> */}
      <NavBar />
    </>
  );
}

export default App;
