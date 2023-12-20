import { useState } from 'react';
import LoginForm from './components/LoginForm';

import './App.css';
import { ApprovePostModal } from './components/Modal';

function App() {
  return (
    <>
      <LoginForm />
      <ApprovePostModal />
    </>
  );
}

export default App;
