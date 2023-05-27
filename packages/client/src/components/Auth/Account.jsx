import React from 'react';
import { Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import styled from '@emotion/styled';

export const Account = () => {
  const { user, logOut } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    try {
      await logOut();
      navigate('/');
    } catch (err) {
      // err
    }
  };

  return (
    <Container maxWidth="xs" sx={{ marginY: '2rem' }}>
      <Typography variant="h6" textAlign="center" color="white">
        User Email {user && user.email}
      </Typography>
      <Button onClick={handleLogout}>Logout</Button>
    </Container>
  );
};

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
