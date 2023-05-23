import styled from '@emotion/styled';
import { Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiURL } from '../../apiURL';
import { useUserContext } from '../../context/UserContext';

export const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { createUser } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredentials = await createUser(email, password);

      await fetch(`${apiURL()}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName,
          email,
          uid: userCredentials.user.uid,
        }),
      });

      // TODO: Display a modal
      navigate('/');
    } catch (err) {
      // error
      // TODO: Display a modal
      setError(err.message);
    }
  };

  if (error) {
    // TODO: Display a modal
    return <div>Error</div>;
  }

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
            label="Enter name"
            value={fullName}
            inputProps={{ minLength: 6 }}
            onChange={(e) => setFullName(e.target.value)}
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
            minLength="6"
            pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,}$"
            title="Password must have at least 6 characters, including 1 digit and 1 symbol"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Create</Button>
          <Typography>
            Already a member?
            <Link to="/auth"> Login</Link>
          </Typography>
        </Form>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  height: 100%;
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
