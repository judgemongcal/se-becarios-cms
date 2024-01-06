import { useState } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import './App.css';
import Login from './components/pages/Login';
import PageNotFound from './components/pages/PageNotFound';
import NavBar from './components/global/NavBar';
import NavBarMobile from './components/global/NavBarMobile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/dashboard" element={<Login />} />
        <Route path="/create-post" element={<Login />} />
        <Route path="/manage-content" element={<Login />} />
        <Route path="/post-archives" element={<Login />} />
        <Route path="/settings" element={<Login />} />
        <Route path="/sign-out" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    // <>
    //   <NavBarMobile />
    //   <NavBar />
    //   <Login />
    // </>
  );
}

export default App;
