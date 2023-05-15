import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components/Auth/AuthForm';

export const AuthPage = () => {
  const [authUser, setAuthUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  if (authUser) {
    return navigate('/');
  }

  return (
    <div>
      <AuthForm isSignIn={true} />
    </div>
  );
};
