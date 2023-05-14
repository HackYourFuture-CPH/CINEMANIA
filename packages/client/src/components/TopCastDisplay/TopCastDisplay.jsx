import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import {
  Container,
  Typography,
  Avatar,
  Stack,
  Box,
  Button,
  CircularProgress,
} from '@mui/material';

const TopCastDisplay = ({ movieID }) => {
  const [castList, setCastList] = useState([]);
  const [showFullCast, setShowFullCast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCastList = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${apiURL()}/crew/movie/${movieID}`);
        const data = await response.json();
        setCastList(data);
      } catch (error) {
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    fetchCastList();
  }, [movieID]);

  const handleShowFullCast = () => {
    setShowFullCast(!showFullCast);
  };

  return (
    <Box
      alignItems="center"
      sx={{
        paddingLeft: 5,
        paddingRight: 5,
        // maxWidth: 'xl',
        // disableGutters: true,
        // position: 'absolute',
        // right: 280,
        // left: 0,
        // top: 1200,
        // mt: 15,
      }}
      maxWidth="xl"
    >
      <Typography
        variant="overline"
        sx={{
          height: 30,
          fontSize: 32,
          color: '#FFFFFF',
          paddingLeft: 3,
          borderLeft: 7,
        }}
      >
        Top Cast
      </Typography>
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
                width: 219,
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
                  width: 219,
                  height: 219,
                  border: 1,
                  borderColor: 'grey.500',
                }}
                variant="circular"
              />
              <Typography
                variant="caption"
                sx={{
                  width: 150,
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
            width: 300,
            color: '#FFFFFF',
            textDecoration: 'underline',
            textUnderlineOffset: 10,
            left: '85%',
            fontSize: 32,
            fontWeight: 400,
            paddingRight: 12,
          }}
        >
          {showFullCast ? 'Show less' : 'Full Cast'}
        </Button>
      )}
    </Box>
  );
};

export default TopCastDisplay;
