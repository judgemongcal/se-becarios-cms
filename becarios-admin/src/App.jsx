import { useState } from 'react';
import LoginForm from './components/LoginForm';

import './App.css';
import { ApprovePostModal, RejectPostModal } from './components/Modal';

function App() {
  return (
    <>
      <LoginForm />
      {/* <RejectPostModal /> */}
    </>
  );
}

export default App;
