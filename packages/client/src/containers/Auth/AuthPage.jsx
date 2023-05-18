import React, { useEffect, useCallback, useState } from 'react';
import { Typography, Container } from '@mui/material';
import styled from '@emotion/styled';
import { apiURL } from '../../apiURL';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';

export const AuthPage = () => {
  const { user, name, loading, registerWithEmailAndPassword } =
    useUserContext();

  const navigate = useNavigate();

  const [name1, setName1] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addUserToDb = useCallback(async (userCreated, fullName) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        full_name: fullName,
        email: userCreated.email,
        uid: userCreated?.uid,
      }),
    };
    await fetch(`${apiURL()}/users`, requestOptions);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    registerWithEmailAndPassword(name1, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user && name) {
      addUserToDb(user, name);
      navigate('/');
    }
  }, [user, name, loading, navigate, addUserToDb]);

  return (
    <Section>
      <Container maxWidth="xs" sx={{ marginY: '2rem' }}>
        <Typography variant="h3" textAlign="center" color="white">
          Create Account
        </Typography>
        <Form onSubmit={handleSubmit}>
          <InputField
            required
            type="text"
            placeholder="enter name"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
          <InputField
            required
            type="email"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            required
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Sign UP</Button>
        </Form>
      </Container>
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

const Form = styled.form`
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: white;
  a {
    color: ${(props) => props.theme.palette.mainGreen};
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    color: ${(props) => props.theme.palette.hoverRed};
  }
`;

const InputField = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 2.5rem;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  margin: 1rem;
  background-color: white;
  color: black;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:hover {
    outline: 0;
    border: 0;
  }
  &:active {
    border: ${(props) => props.theme.palette.mainGreen};
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.palette.mainGreen};
  cursor: pointer;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 2rem;

  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:hover {
    background-color: ${(props) => props.theme.palette.hoverRed};
  }
  &:active {
    background-color: ${(props) => props.theme.palette.mainGreen};
  }
`;
