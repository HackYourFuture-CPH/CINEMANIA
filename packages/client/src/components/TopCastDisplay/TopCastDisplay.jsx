import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import { MovieDetailsLayout } from '../../containers/MovieDetailsLayout/MovieDetailsLayout';
import styled from '@emotion/styled';

export const TopCastDisplay = ({ movieID }) => {
  const [castList, setCastList] = useState([]);
  const [showFullCast, setShowFullCast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCastList = async () => {
      setIsLoading(true);
      if (movieID) {
        try {
          const response = await fetch(`${apiURL()}/crew/movie/${movieID}`);
          const data = await response.json();
          setCastList(data);
        } catch (error) {
          setIsLoading(false);
        }
      }
      setIsLoading(false);
    };
    fetchCastList();
  }, [movieID]);

  const handleShowFullCast = () => {
    setShowFullCast((previousFullCastState) => !previousFullCastState);
  };

  return (
    <MovieDetailsLayout>
      <Title>TOP CAST</Title>
      <Stack
        direction="row"
        spacing={1}
        sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        {castList
          .slice(0, showFullCast ? castList.length : 6)
          .map((castMember) => (
            <Box
              key={castMember.id}
              sx={{
                width: 200,
                p: 1,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Avatar
                alt={`${castMember.full_name}`}
                src={castMember.image_location}
                sx={{
                  width: 200,
                  height: 200,
                  border: 1,
                  borderColor: 'grey.500',
                }}
                variant="circular"
              />
              <Typography
                variant="caption"
                sx={{
                  width: 200,
                  height: 30,
                  fontSize: 25,
                  margin: 5,
                  fontWeight: 500,
                  color: '#FFFFFF',
                }}
              >
                {`${castMember.full_name}`}
              </Typography>
            </Box>
          ))}
      </Stack>
      {isLoading ? (
        <CircularProgress
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        />
      ) : (
        <Button
          onClick={handleShowFullCast}
          sx={{
            width: 200,
            color: '#FFFFFF',
            textDecoration: 'underline',
            textUnderlineOffset: 10,
            alignSelf: 'flex-end',
            fontSize: 32,
            fontWeight: 400,
          }}
        >
          {showFullCast ? 'Show less' : 'Full Cast'}
        </Button>
      )}
    </MovieDetailsLayout>
  );
};
const Title = styled(Typography)`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  font-family: Inter, sans-serif;
  border-left: 0.3rem solid #ffffff;
  padding-left: 0.9rem;
  margin: 0 0 1.5rem 0;
  align-self: flex-start;
`;
