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
import Settings from './pages/Settings';
import ManageContent from './pages/ManageContent';
import PostArchives from './pages/PostArchives';
import RecentActivities from './pages/RecentActivities';
import CreateArticle from './pages/CreateArticle';
import { CreateArticleProvider } from './hooks/useCreateArticleContext';
import { SettingsProvider } from './hooks/useSettingsContext';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/create-article"
          element={
            <CreateArticleProvider
              value={CreateArticleProvider.contextValue}
            >
              <CreateArticle />
            </CreateArticleProvider>
          }
        />
        <Route
          path="/recent-activities"
          element={<RecentActivities />}
        />
        <Route
          path="/manage-content"
          element={<ManageContent />}
        />
        <Route
          path="/post-archives"
          element={<PostArchives />}
        />
        <Route
          path="/settings"
          element={
            <SettingsProvider
              value={SettingsProvider.contextValue}
            >
              <Settings />
            </SettingsProvider>
          }
        />
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
