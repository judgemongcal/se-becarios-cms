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
  const [isPasswordInvalid, setIsPasswordInvalid] =
    useState(null);

  function resetAdminFields() {
    setAdminFirstName('');
    setAdminLastName('');
    setAdminContactNum('');
    setAdminImageSrc('');
    setAdminRole('');
    setAdminEmail('');
    setAdminPassword('');
    setIsEmailInvalid(null);
    setIsPasswordInvalid(null);
  }

  function resetValidation() {
    setIsEmailInvalid(null);
    setIsPasswordInvalid(null);
  }

  const contextValue = {
    adminFirstName,
    setAdminFirstName,
    setAdminLastName,
    setAdminContactNum,
    adminImageSrc,
    setAdminImageSrc,
    adminRole,
    setAdminRole,
    adminEmail,
    setAdminEmail,
    adminPassword,
    setAdminPassword,
    isEmailInvalid,
    setIsEmailInvalid,
    isPasswordInvalid,
    setIsPasswordInvalid,
    resetAdminFields,
    resetValidation,
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
}
