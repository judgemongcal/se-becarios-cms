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
import { EditArticleProvider } from './hooks/useEditArticleContext';
import ProtectedRoute from './pages/ProtectedRoute';
import { UserInfoProvider } from './hooks/useUserInfoContext';
import { AdminProvider } from './hooks/useAdminContext';
import EditArticle from './pages/EditArticle';
import { ArchiveProvider } from './hooks/useArchiveContext';

function App() {
  return (
    <BrowserRouter>
      <SignOutProvider value={SignOutProvider.contextValue}>
        <AuthContextProvider
          value={AuthContextProvider.contextValue}
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
                path="/edit-article/:id"
                element={
                  <ProtectedRoute>
                    <CreateArticleProvider
                      value={
                        CreateArticleProvider.contextValue
                      }
                    >
                      <EditArticleProvider
                        value={
                          EditArticleProvider.contextValue
                        }
                      >
                        <EditArticle />
                      </EditArticleProvider>
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
                      {' '}
                      <CreateArticleProvider
                        value={
                          CreateArticleProvider.contextValue
                        }
                      >
                        <ManageContent />
                      </CreateArticleProvider>
                    </ManageContentProvider>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/post-archives"
                element={
                  <ProtectedRoute>
                    <ArchiveProvider
                      value={ArchiveProvider.contextValue}
                    >
                      <PostArchives />
                    </ArchiveProvider>
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
                      <AdminProvider
                        value={AdminProvider.contextValue}
                      >
                        <Settings />
                      </AdminProvider>
                    </SettingsProvider>
                  </ProtectedRoute>
                }
              />
              {/* <Route path="/sign-out" element={<Login />} /> */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </UserInfoProvider>
        </AuthContextProvider>
      </SignOutProvider>
    </BrowserRouter>
    // <>
    //   <NavBarMobile />
    //   <NavBar />
    //   <Login />
    // </>
  );
}

export default App;
