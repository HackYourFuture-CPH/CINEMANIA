import React, { useState } from 'react';
import {
  Typography,
  Container,
  Box,
  Modal,
  CircularProgress,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import styled from '@emotion/styled';

export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { signIn, isModalOpen, toggleModal } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      toggleModal();
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (err) {
      setError(err.message);
      toggleModal();
      setTimeout(() => {
        toggleModal();
      }, 1500);
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
          <Link to="/signup"> Signup</Link>
        </Typography>
      </Form>

      <Modal open={isModalOpen}>
        {error ? (
          <ModalBox backgroundColor="hoverRed">
            <Typography variant="h5">
              The email address or password you entered is invalid.
            </Typography>
          </ModalBox>
        ) : (
          <ModalBox>
            <CircularProgress color="primary" />
          </ModalBox>
        )}
      </Modal>
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

const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.backgroundColor};
  border-radius: 0.5rem;
  box-shadow: 24;
  padding: 3rem;
`;

const InputField = styled.input`
  outline: none;
  border: 2px solid white;
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
    border: 2px solid #01b389;
  }
  &:active {
    border: ${(props) => props.theme.palette.mainGreen};
  }

  &:focus {
    border: 2px solid #01b389;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.palette.mainGreen};
  cursor: pointer;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
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
