import { createContext, useContext, useState } from 'react';
import { UserAuth } from './useAuthContext';

export const UserInfoContext = createContext();

export function useUserInfoContext() {
  return useContext(UserInfoContext);
}

export function UserInfoProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const { user } = UserAuth();

  const userEmail = user.email;

  const contextValue = {
    userInfo,
  };

  return (
    <UserInfoContext.Provider value={contextValue}>
      {children}
    </UserInfoContext.Provider>
  );
}
