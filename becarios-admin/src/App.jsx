import { useState } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import './App.css';
import Login from './components/global/LoginForm';
import PageNotFound from './pages/PageNotFound';
import NavBar from './components/global/NavBar';
import NavBarMobile from './components/global/NavBarMobile';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
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
