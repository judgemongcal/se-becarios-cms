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
  SubmitPostModal,
} from './components/Modal';

function App() {
  return (
    <>
      <LoginForm />
      <DeleteReqSuccessModal />
    </>
  );
}

export default App;
