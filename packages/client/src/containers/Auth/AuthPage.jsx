import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
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
    <Section>
      <AuthForm />
    </Section>
  );
};

// ToDO: Remove after we create a global Styled Section
const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
