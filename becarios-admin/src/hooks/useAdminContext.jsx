import { createContext, useContext, useState } from 'react';

export const AdminContext = createContext();

export function useAdminContext() {
  return useContext(AdminContext);
}

export function AdminProvider({ children }) {
  const [adminFirstName, setAdminFirstName] = useState('');
  const [adminLastName, setAdminLastName] = useState('');
  const [adminContactNum, setAdminContactNum] =
    useState('');
  const [adminImageSrc, setAdminImageSrc] = useState('');
  const [adminRole, setAdminRole] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] =
    useState(null);
  const [isPasswordInvalid, setisPasswordInvalid] =
    useState(false);

  const contextValue = {
    setAdminFirstName,
    setAdminLastName,
    setAdminContactNum,
    adminImageSrc,
    setAdminImageSrc,
    setAdminRole,
    adminEmail,
    setAdminEmail,
    setAdminPassword,
    isEmailInvalid,
    setIsEmailInvalid,
    isPasswordInvalid,
    setisPasswordInvalid,
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
}
