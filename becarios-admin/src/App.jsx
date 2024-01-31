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
import { SignOutProvider } from './hooks/useSignOutContext';
import { ManageContentProvider } from './hooks/useManageContentContext';
import { AuthContextProvider } from './hooks/useAuthContext';
import ProtectedRoute from './pages/ProtectedRoute';
import { UserInfoProvider } from './hooks/useUserInfoContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider
        value={AuthContextProvider.contextValue}
      >
        <SignOutProvider
          value={SignOutProvider.contextValue}
        >
          <UserInfoProvider
            value={UserInfoProvider.contextValue}
          >
            <Routes>
              <Route index element={<Login />} />

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/create-article"
                element={
                  <ProtectedRoute>
                    <CreateArticleProvider
                      value={
                        CreateArticleProvider.contextValue
                      }
                    >
                      <CreateArticle />
                    </CreateArticleProvider>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/recent-activities"
                element={
                  <ProtectedRoute>
                    <RecentActivities />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/manage-content"
                element={
                  <ProtectedRoute>
                    <ManageContentProvider
                      value={
                        ManageContentProvider.contextValue
                      }
                    >
                      <ManageContent />
                    </ManageContentProvider>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/post-archives"
                element={
                  <ProtectedRoute>
                    <PostArchives />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <SettingsProvider
                      value={SettingsProvider.contextValue}
                    >
                      <Settings />
                    </SettingsProvider>
                  </ProtectedRoute>
                }
              />
              {/* <Route path="/sign-out" element={<Login />} /> */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </UserInfoProvider>
        </SignOutProvider>
      </AuthContextProvider>
    </BrowserRouter>
    // <>
    //   <NavBarMobile />
    //   <NavBar />
    //   <Login />
    // </>
  );
}

export default App;
