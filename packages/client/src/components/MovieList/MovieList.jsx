import React from 'react';
import { Grid, Typography, CardMedia, Box, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MovieList = () => {
  const dummyData = [
    {
      id: 1,
      category_id: 3,
      title: 'A Beautiful Mind',
      description:
        'After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.',
      movie_year: 2001,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg',
      price: 90,
    },
    {
      id: 2,
      category_id: 7,
      title: 'P.S. I Love You',
      description:
        'A young widow discovers that her late husband has left her 10 messages intended to help ease her pain and start a new life.',
      movie_year: 2007,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/bZlRZKBOR6cC8L35BgGoh4hJ63F.jpg',
      price: 85,
    },
    {
      id: 3,
      category_id: 6,
      title: 'Patch Adams',
      description:
        'The true story of a heroic man, Hunter Patch Adams, determined to become a medical doctor because he enjoys helping people. He ventured where no doctor had ventured before, using humour and pathos.',
      movie_year: 1998,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/xN1aKur5ddWQSXTqvzDPJD2TCxe.jpg',
      price: 95,
    },
    {
      id: 4,
      category_id: 3,
      title: 'I Can Only Imagine',
      description:
        'The inspiring and unknown true story behind MercyMes beloved, chart-topping song that brings ultimate hope to so many is a gripping reminder of the power of true forgiveness.',
      movie_year: 2018,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/veZszwMZu8d3WMU6TJX9sV5w1Y4.jpg',
      price: 80,
    },
    {
      id: 5,
      category_id: 6,
      title: 'Father of the Bride Collection',
      description:
        'Just when George Banks has recovered from his daughters wedding, he receives the news that shes pregnant ...and that Georges wife, Nina, is expecting too.He was planning on selling their home, but thats a plan.',
      movie_year: 1995,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/nts4iOmNnq7GNicycMJ9pSAn204.jpg',
      price: 90,
    },
    {
      id: 6,
      category_id: 1,
      title: 'Legend',
      description:
        'Suave, charming and volatile, Reggie Kray and his unstable twin brother Ronnie start to leave their mark on the London underworld in the 1960s. Using violence to get what they want, the siblings orchestrate robberies and murders.',
      movie_year: 2015,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/4shf5Alq4KWCKqrAAQe0JGJHYp5.jpg',
      price: 66,
    },
    {
      id: 7,
      category_id: 4,
      title: 'Stuart Little',
      description:
        'The adventures of a heroic and debonair stalwart mouse named Stuart Little with human qualities, who faces some comic misadventures while searching for his lost bird friend and living with a human family as their child.',
      movie_year: 1999,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/jwydlxxLPVxM5uCfJybEsANzvvg.jpg',
      price: 100,
    },
    {
      id: 8,
      category_id: 2,
      title: 'Gone Girl',
      description:
        'With his wife his disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it is suspected that he may not be innocent.',
      movie_year: 2014,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/qymaJhucquUwjpb8oiqynMeXnID.jpg',
      price: 120,
    },
    {
      id: 9,
      category_id: 5,
      title: 'The Exorcist',
      description:
        "Ophelia, a young nun recently arriving in the town of San Ramon, is forced to perform an exorcism on a pregnant woman in danger of dying. Just when she thinks her possession has ended, she discovers that the evil presence hasn't disappeared yet",
      movie_year: 2014,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/d07xtqwq1uriQ1hda6qeu8Skt5m.jpg',
      price: 666,
    },
    {
      id: 10,
      category_id: 3,
      title: 'The Dark Knight',
      description:
        'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective.',
      movie_year: 2008,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/z4XwvnDZSm40PCdg9vFJmo0W9ri.jpg',
      price: 120,
    },
  ];
  return (
    <Box bgcolor="mainGreen" fontFamily="Inter" marginTop="150rem">
      <Typography
        sx={{
          position: 'relative',
          height: '1.87rem',
          width: '17.81rem',
          top: '1.56rem',
          left: '35rem',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '1.56rem',
          color: '#003C2D',
        }}
        variant="h1"
      />
      <Grid container spacing={2}>
        {dummyData.map((each) => (
          <Grid key={each.id} item md={4} xs={12} sm={4}>
            <CardMedia
              sx={{
                position: 'relative',
                height: '27.12rem',
                width: '18rem',
                left: '10%',
                top: '40%',
                paddingTop: '8rem',
                marginBottom: '4rem',
                paddingLeft: '2.62rem',
              }}
              image={`${each.image_location}`}
              title="Image Title"
            >
              <Button
                variant="text"
                sx={{
                  position: 'absolute',
                  height: '1.75rem',
                  top: '0',
                  right: '0',
                }}
              >
                <FavoriteBorderIcon
                  sx={{
                    display: 'block',
                    position: 'absolute',
                    width: '1.9rem',
                    height: '1.75rem',
                    right: '0',
                    color: '#FFFFFF',
                    backgroundColor: '#000000CC',
                    zIndex: 1,
                  }}
                />
              </Button>
              <Button
                href="/movies/:movies.id"
                variant="contained"
                sx={{
                  position: 'absolute',
                  background:
                    'linear-gradient(166.18deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 98.81%), #00FFC2',
                  boxShadow: '20px 40px 70px rgba(0, 0, 0, 0.25)',
                  bottom: '1%',
                  marginLeft: '4.00rem',
                  height: '1rem',
                  fontSize: '10px',
                }}
              >
                See Details
              </Button>
            </CardMedia>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default MovieList;
