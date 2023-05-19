import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Signin } from '../../components/Auth/Signin';
import { Account } from '../../components/Auth/Account';
import { useUserContext } from '../../context/UserContext';

export const AuthPage = () => {
  const { user } = useUserContext();

  return <Section>{user ? <Account /> : <Signin />}</Section>;
};

// ToDO: Remove after we create a global Styled Section
const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
