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

export function ReviewsDisplay() {
  return (
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
          Lorem ipsum dolor sit amet consectetur. Magna magna ut vulputate lorem
          dignissim ac orci. Lacinia aenean ante ultrices diam sociis blandit
          etiam turpis. Nullam viverra a aenean velit auctor. Mattis volutpat
          sit et ultrices. At nunc tincidunt magna et pellentesque.
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
      </Box>
    </List>
  );
}
