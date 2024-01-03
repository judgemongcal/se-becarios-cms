import { useState } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import './App.css';
import Login from './components/pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
