import React, { useState, useEffect } from 'react';
import { useUserContext } from '../../context/UserContext';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import styled from '@emotion/styled';

export const LogInDialog = () => {
  const { user } = useUserContext();
  const isLoggedIn = !!user;
  const [open, setOpen] = useState(false);

  const handleLoginClick = () => {
    window.location.href = '/signin';
  };

  const handleCloseClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      setOpen(true);
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <CustomDialog open={open} onClose={handleCloseClick}>
        <CustomDialogTitle>You are not logged in!</CustomDialogTitle>
        <CustomDialogContent>
          <p>Please log in to submit your Rating.</p>
        </CustomDialogContent>
        <DialogActions>
          <CustomButton onClick={handleLoginClick}>Go to login</CustomButton>
          <CustomButton onClick={handleCloseClick}>Close</CustomButton>
        </DialogActions>
      </CustomDialog>
    );
  }
};

const CustomDialog = styled(Dialog)`
  .MuiPaper-root {
    background-color: #003c2d;
    width: 80%;
    max-width: 600px;
    height: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const CustomDialogTitle = styled(DialogTitle)`
  color: #00ffc2;
  font-size: 2.5rem;
  margin-top: 4rem;
`;

const CustomDialogContent = styled(DialogContent)`
  color: #00ffc2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  p {
    font-size: 2rem;
  }
`;

const CustomButton = styled(Button)`
  background-color: #00ffc2;
  color: #000000;
  margin-bottom: 4rem;
  width: 120px;
  &:hover {
    background-color: red;
  }
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;
