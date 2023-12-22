import { useState } from 'react';
import LoginForm from './components/LoginForm';

import './App.css';
import {
  ApprovePostModal,
  EditPostModal,
  RejectPostModal,
} from './components/Modal';

function App() {
  return (
    <>
      <LoginForm />
      <EditPostModal />
    </>
  );
}

export default App;
