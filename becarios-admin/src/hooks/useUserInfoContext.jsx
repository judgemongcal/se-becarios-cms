import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { UserAuth } from './useAuthContext';
import { getUserInfo } from '../server/firebase';
import { useSignOutContext } from './useSignOutContext';

export const UserInfoContext = createContext();

export function useUserInfoContext() {
  return useContext(UserInfoContext);
}

export function UserInfoProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});

  const { user } = UserAuth();

  useEffect(() => {
    async function fetchUser() {
      if (user && user.email) {
        try {
          const userEmail = user.email;
          const currentUser = await getUserInfo(
            userEmail,
            user,
          );

          setUserInfo(currentUser);
          console.log(currentUser);
          console.log(user);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchUser();
  }, []);

  const contextValue = {
    userInfo,
    setUserInfo,
  };

  return (
    <UserInfoContext.Provider value={contextValue}>
      {children}
    </UserInfoContext.Provider>
  );
}
