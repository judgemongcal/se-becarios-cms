import { useState } from 'react';
import LoginForm from './components/LoginForm';

import './App.css';
import {
  ApprovePostModal,
  DeletePostModal,
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
      <EditReqSuccessModal />
    </>
  );
}

export default App;
