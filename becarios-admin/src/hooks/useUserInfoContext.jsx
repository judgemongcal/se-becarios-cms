import { createContext, useContext, useState } from 'react';
import { UserAuth } from './useAuthContext';
import { db } from '../server/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { firestore } from 'firebase';

export const UserInfoContext = createContext();

export function useUserInfoContext() {
  return useContext(UserInfoContext);
}

export function UserInfoProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const { user } = UserAuth();

  const userEmail = user.email;
  const colRef = collection(db, 'admin-credentials');

  async function searchUser(userEmail) {
    try {
      const queryRes = await firestore
        .collection('admin-credentials')
        .where('email', '==', userEmail)
        .get();
      console.log(queryRes);
    } catch (error) {
      console.log(error);
    }
  }

  searchUser(userEmail);

  const contextValue = {
    userInfo,
  };

  return (
    <UserInfoContext.Provider value={contextValue}>
      {children}
    </UserInfoContext.Provider>
  );
}
