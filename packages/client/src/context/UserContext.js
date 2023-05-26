import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { auth } from '../firebase';
import { apiURL } from '../apiURL';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState(null);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const getUserIdByUid = async () => {
      if (user && user.uid) {
        try {
          const response = await fetch(`${apiURL()}/users/${user.uid}`);
          const data = await response.json();
          setUserId(data[0].id);
        } catch (error) {
          return error.name === 'Something wrong in the operation';
        }
      }
    };

    getUserIdByUid();
  }, [user]);

  const userContextValue = useMemo(
    () => ({
      createUser,
      user,
      logOut,
      signIn,
      toggleModal,
      isModalOpen,
      userId,
    }),
    [user, isModalOpen, userId],
  );

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}
