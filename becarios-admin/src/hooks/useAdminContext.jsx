import { createContext, useContext } from 'react';

export const AdminContext = createContext();

export function useAdminContext() {
  return useContext(AdminContext);
}

export function AdminProvider({ children }) {
  const contextValue = {};

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
}
