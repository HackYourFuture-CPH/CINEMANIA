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

          if (response.ok) {
            const data = await response.json();
            setCastList(data);
          } else {
            setCastList([]);
            throw new Error(`Status code error : ${response.status}`);
          }
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

  const StyledTypography = styled(Typography)`
    font-family: 'Inter';
    color: #ffffff;
    font-size: 2rem;
  `;

  const Title = styled(StyledTypography)`
    font-size: 2rem;
    font-weight: 700;
    border-left: 0.3rem solid #ffffff;
    padding-left: 0.9rem;
    margin: 0 0 1.5rem 0;
    align-self: flex-start;
  `;

  const StyledCastTitle = styled(Title)`
    font-weight: 500;
    font-size: 1.56rem;
    width: 12.5rem;
    height: 1.875rem;
    margin: 0.5rem 0 3rem 0;
    border: none;
  `;

  const StyledAvatar = styled(Avatar)`
  width: 13.68rem;
  height: 13.68rem;    
  border: 1,
  color: 'grey.500',
  `;

  const MyButton = styled(Button)({
    width: '12.5rem',
    color: '#00FFC2',
    textDecoration: 'underline',
    textUnderlineOffset: 10,
    alignSelf: 'flex-end',
    fontSize: 32,
    fontWeight: 400,
    marginTop: 2,
  });

  return (
    <MovieDetailsLayout>
      <Title>TOP CAST</Title>
      {castList.length === 0 ? (
        <StyledTypography>
          No cast members available for this movie
        </StyledTypography>
      ) : (
        <>
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
                    width: '13.75rem',
                    p: 1,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between  ',
                    alignItems: 'center',
                  }}
                >
                  <StyledAvatar
                    alt={castMember.full_name}
                    src={castMember.image_location}
                    variant="circular"
                  />
                  <StyledCastTitle variant="caption">
                    {castMember.full_name}
                  </StyledCastTitle>
                </Box>
              ))}
          </Stack>
          <MyButton onClick={handleShowFullCast}>
            {showFullCast ? 'Show less' : 'Full Cast'}
          </MyButton>
        </>
      )}
      {isLoading && (
        <CircularProgress
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        />
      )}
    </MovieDetailsLayout>
  );
};
