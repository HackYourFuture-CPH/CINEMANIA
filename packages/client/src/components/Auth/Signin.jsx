import React, { useState } from 'react';
import { Typography, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import styled from '@emotion/styled';

export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      // TODO: Display a modal
      navigate('/auth');
    } catch (err) {
      // TODO: Display a modal
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ marginY: '2rem' }}>
      <Typography variant="h3" textAlign="center" color="white">
        Login
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
        <Button type="submit">Log In</Button>

        <Typography>
          Not a member?
          <Link to="/signup">Signup</Link>
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
