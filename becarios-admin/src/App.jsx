import { useState } from 'react';
import LoginForm from './components/LoginForm';

import './App.css';
import {
  ApprovePostModal,
  DeletePostModal,
  EditPostModal,
  RejectPostModal,
} from './components/Modal';

function App() {
  return (
    <>
      <LoginForm />
      <DeletePostModal />
    </>
  );
}

export default App;
