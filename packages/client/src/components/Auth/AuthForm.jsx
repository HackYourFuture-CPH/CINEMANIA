import React, { useState } from 'react';
import { Typography, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import styled from '@emotion/styled';

export const AuthForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isRegistered, setIsRegistered] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegistered) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setIsRegistered(true);
        })
        .catch((err) => {
          setIsRegistered(false);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate('/auth');
        })
        .catch((err) => {
          navigate('*');
        });
    }
  };

  return (
    <Container maxWidth="xs" sx={{ marginY: '2rem' }}>
      <Typography variant="h3" textAlign="center" color="white">
        {isRegistered ? 'Login' : 'Create Account'}
      </Typography>
      <Form onSubmit={handleSubmit}>
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
        <Button type="submit">{isRegistered ? 'Log In' : 'Sign Up'}</Button>

        <Typography>
          {!isRegistered ? 'Already a member?' : 'Not a member?'}
          <Link onClick={() => setIsRegistered(!isRegistered)}>
            {!isRegistered ? ' Login' : ' Signup'}
          </Link>
        </Typography>
      </Form>
    </Container>
  );
};

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
