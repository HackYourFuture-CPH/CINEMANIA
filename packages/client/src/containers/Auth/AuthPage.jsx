import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Signin } from '../../components/Auth/Signin';
import { Account } from '../../components/Auth/Account';

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

  return <Section>{authUser ? <Account /> : <Signin />}</Section>;
};

// ToDO: Remove after we create a global Styled Section
const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
