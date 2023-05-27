import React from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

export const AboutPage = () => {
  return (
    <Section>
      <Paragraph>
        Your ultimate destination for all things movies! We are a cutting-edge
        app dedicated to providing an immersive and convenient movie-watching
        experience right at your fingertips.
        <br />
        <br /> At Cinemania, we understand the thrill and joy of diving into the
        world of cinema. With our extensive collection of movies from various
        genres, eras, and countries, you can explore a vast library of cinematic
        gems, from timeless classics to the latest releases.
        <br /> <br /> One of the standout features of Cinemania is the option to
        buy movies directly within the app. We believe in supporting the film
        industry and giving users the opportunity to own their favorite films
        for repeated viewings. By offering a seamless purchasing experience, we
        make it easy for you to build a personal movie library that can be
        enjoyed anytime, anywhere.
      </Paragraph>
    </Section>
  );
};

const Section = styled.section`
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled(Typography)`
  color: white;
  text-align: center;
  width: 70%;
  font-size: 1.5rem;
  text-shadow: 1px 0px 1px black;
`;
