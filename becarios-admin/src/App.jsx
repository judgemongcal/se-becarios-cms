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
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="login" element={<Login />} />
    //     <Route path="*" element={<PageNotFound />} />
    //   </Routes>
    // </BrowserRouter>
    // <NavBar />
    <NavBarMobile />
  );
}

export default App;
