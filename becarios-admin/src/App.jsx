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
import Home from './pages/Home';
import Sample from './pages/Sample';

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
              <Route path="/sample" element={<Sample />} />
              <Route index element={<Login />} />
              {/* <Route path="/home" element={<Home />} /> */}
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    {/* <Dashboard /> */}
                    <Home />
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
                    <ManageContentProvider
                      value={
                        ManageContentProvider.contextValue
                      }
                    >
                      <ArchiveProvider
                        value={ArchiveProvider.contextValue}
                      >
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
                      </ArchiveProvider>
                    </ManageContentProvider>
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
                    <ArchiveProvider
                      value={ArchiveProvider.contextValue}
                    >
                      <ManageContentProvider
                        value={
                          ManageContentProvider.contextValue
                        }
                      >
                        <CreateArticleProvider
                          value={
                            CreateArticleProvider.contextValue
                          }
                        >
                          <ManageContent />
                        </CreateArticleProvider>
                      </ManageContentProvider>
                    </ArchiveProvider>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/post-archives"
                element={
                  <ProtectedRoute>
                    <ManageContentProvider>
                      <ArchiveProvider
                        value={ArchiveProvider.contextValue}
                      >
                        <PostArchives />
                      </ArchiveProvider>
                    </ManageContentProvider>
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
