import { useState } from 'react';
import LoginForm from './components/LoginForm';

import './App.css';
import {
  ApprovePostModal,
  DeletePostModal,
  EditPostModal,
  RejectPostModal,
  SubmitPostModal,
} from './components/Modal';

function App() {
  return (
    <>
      <LoginForm />
      <SubmitPostModal />
    </>
  );
}

export default App;
