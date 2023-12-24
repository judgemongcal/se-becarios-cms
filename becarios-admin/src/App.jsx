import { useState } from 'react';
import LoginForm from './components/LoginForm';

import './App.css';
import {
  ApprovePostModal,
  DeletePostModal,
  EditPostModal,
  PostReqSuccessModal,
  RejectPostModal,
  SubmitPostModal,
} from './components/Modal';

function App() {
  return (
    <>
      <LoginForm />
      <PostReqSuccessModal />
    </>
  );
}

export default App;
