import * as React from 'react';
import {
  Box,
  List,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar,
  Typography,
  Button,
} from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { RatingStars } from '../RatingStars/RatingStars';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { MovieDetailsLayout } from '../../containers/MovieDetailsLayout/MovieDetailsLayout';

import styled from '@emotion/styled';


export function ReviewsDisplay() {
  return (
    <MovieDetailsLayout>
      <List>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '39px',
          }}
        >
          <Typography
            sx={{
              height: 30,
              fontSize: 32,
              fontWeight: 800,
              borderLeft: 4,
              p: 1,
              display: 'flex',
              alignItems: 'center',
              color: '#FFFFFF',
            }}
          >
            Reviews
          </Typography>

        <HeaderBox>
          <StyledTypography>REVIEWS</StyledTypography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <AddCircleIcon
              sx={{
                color: '#00FFC2',
              }}
            />

            <Typography
              sx={{
                height: 30,
                fontSize: 25,
                fontWeight: 800,
                p: 1,
                color: '#00FFC2',
              }}
            >
              Add a review
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{ marginLeft: 0, borderBottomWidth: 5, marginBottom: '49px' }}
          variant="inset"
          color="#00FFC2"
          component="li"
        />
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar
              sx={{
                width: '95px',
                height: '95px',
                marginRight: '45px',
              }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />

            <StyledAddReviewTypography>Add a review</StyledAddReviewTypography>
          </Box>
        </HeaderBox>
        <StyledDivider />
        <ListItem alignItems="center">
          <ListItemAvatar>
            <StyledAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

          </ListItemAvatar>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 32,
                  marginRight: '34px',
                }}
                color="#FFFFFF"
              >
                Maren Vaccaro
              </Typography>
              <Typography color="#FFFFFF">24 April 2023</Typography>
            </Box>

            <RatingStars averageRating={3.5} numberOfReviews={5} />

            <RatingStars
              averageRating={3.5}
              numberOfReviews={5}
              color="#00FFC2"
              ratingText={false}
            />

            <Typography
              sx={{
                fontSize: '20px',
                color: '#A4A4A4',
              }}
            >
              8/10
            </Typography>
          </Box>
        </ListItem>
        <Box
          sx={{
            paddingLeft: 5,
            display: 'inline-block',
          }}
        >

          <Typography
            sx={{
              fontSize: '20px',
              marginTop: '30px',
            }}
            color="#FFFFFF"
          >

          <ReviewTextTypography>

            Lorem ipsum dolor sit amet consectetur. Magna magna ut vulputate
            lorem dignissim ac orci. Lacinia aenean ante ultrices diam sociis
            blandit etiam turpis. Nullam viverra a aenean velit auctor. Mattis
            volutpat sit et ultrices. At nunc tincidunt magna et pellentesque.

          </Typography>
        </Box>
        <Box
          sx={{
            paddingLeft: 5,
            display: 'flex',
            paddingTop: '34px',
            marginBottom: '49px',
          }}
        >

          </ReviewTextTypography>
        </Box>
        <LikesBox>

          <ThumbUpIcon sx={{ paddingRight: 2, color: '#00FFC2' }} />
          <Typography color="#A4A4A4" sx={{ paddingRight: '49px' }}>
            45 likes
          </Typography>
          <ThumbDownOffAltIcon
            sx={{
              paddingRight: 2,
              color: '#00FFC2',
            }}
          />

          <Typography color="#A4A4A4"> 12 likes</Typography>

        </Box>
        <Divider
          sx={{ marginLeft: 0, borderBottomWidth: 5 }}
          variant="inset"
          component="li"
        />

        </LikesBox>
        <StyledDivider />

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >

          <Button
            sx={{
              color: '#00FFC2',
              textDecoration: 'underline',
              textUnderlineOffset: 10,
              fontSize: '20px',
              fontWeight: 400,
            }}
          >
            More reviews...
          </Button>
          <ArrowDropDownIcon
            sx={{
              width: '70px',
              height: '70px',
              color: '#00FFC2',
            }}
          />

          <StyledButton>More reviews...</StyledButton>
          <StyledArrowDropDownIcon />

        </Box>
      </List>
    </MovieDetailsLayout>
  );
}


const HeaderBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '39px',
});

const StyledTypography = styled(Typography)({
  height: 30,
  fontSize: 32,
  fontWeight: 800,
  borderLeft: '4px solid #FFFFFF',
  padding: '4px',
  display: 'flex',
  alignItems: 'center',
  color: '#FFFFFF',
  paddingLeft: '10px',
});

const StyledAddReviewTypography = styled(Typography)({
  height: 30,
  fontSize: 25,
  fontWeight: 800,
  padding: '4px',
  color: '#00FFC2',
});

const StyledDivider = styled(Divider)({
  marginLeft: 0,
  borderBottomWidth: 1,
  marginBottom: '49px',
  borderColor: '#00FFC2',
});

const StyledAvatar = styled(Avatar)({
  width: '95px',
  height: '95px',
  marginRight: '45px',
});

const ReviewTextTypography = styled(Typography)({
  fontSize: '20px',
  marginTop: '30px',
  color: '#FFFFFF',
});

const LikesBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  paddingTop: '34px',
  margin: '0 0 49px 40px',
});

const StyledButton = styled(Button)({
  color: '#00FFC2',
  textDecoration: 'underline',
  textUnderlineOffset: 10,
  fontSize: '20px',
  fontWeight: 400,
});

const StyledArrowDropDownIcon = styled(ArrowDropDownIcon)({
  width: '70px',
  height: '70px',
  color: '#00FFC2',
});

