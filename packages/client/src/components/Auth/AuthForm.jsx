/* eslint-disable no-console */
import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const AuthForm = ({ isSignIn }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isRegistered, setIsRegistered] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignIn) {
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
    <Container maxWidth="xs">
      <Typography variant="h1">
        {isSignIn ? 'Log In' : 'Create Account'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          {isSignIn ? 'Log In' : 'Sign Up'}
        </Button>
      </form>
    </Container>
  );
};
