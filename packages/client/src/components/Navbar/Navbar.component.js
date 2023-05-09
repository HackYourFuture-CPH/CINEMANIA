import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const Navbar = () => {
  return (
    <AppBar component="nav">
      <Box sx={{ padding: '0.6rem 8.75rem' }} bgcolor="green">
        <Toolbar
          fontFamily="Inter"
          sx={{
            height: '3rem',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <img
              src="https://i.ibb.co/KhL6qmv/Frame-2-transformed.png"
              alt="Frame-2-transformed"
              border="0"
              width="80%"
            />
          </Box>
          <Box>
            <img
              src="https://i.ibb.co/LnHZThJ/Frame-16.png"
              alt="Frame_16-removebg-preview"
              border="0"
            />
          </Box>
          <Box>
            <ShoppingCartIcon
              sx={{
                width: '1.75rem',
                height: '1.75rem',
                color: '#000000',
                marginRight: '1rem',
              }}
            />
            <FavoriteBorderIcon
              sx={{ width: '1.9rem', height: '1.75rem', color: '#000000' }}
            />
          </Box>
        </Toolbar>
      </Box>
      <Toolbar
        sx={{
          height: '4.75rem',
          background: '#000000',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          sx={{
            color: '#FFFFFF',
            fontSize: '1.1rem',
            fontWeight: '400',
            padding: '0 1.8rem 0 3.1rem',
          }}
        >
          CATEGORIES
        </Button>
        <Button
          sx={{
            color: '#FFFFFF',
            fontSize: '1.1rem',
            fontWeight: '400',
            padding: '0 1.8rem 0 3.1rem',
            marginLeft: '4rem',
          }}
        >
          THE TOP 100
        </Button>
        <Button
          sx={{
            color: '#FFFFFF',
            fontSize: '1.1rem',
            fontWeight: '400',
            padding: '0 1.8rem 0 3.1rem',
            marginLeft: '4rem',
          }}
        >
          ABOUT
        </Button>
        <Button
          sx={{
            color: '#FFFFFF',
            fontSize: '1.1rem',
            fontWeight: '400',
            padding: '0 1.8rem 0 3.1rem',
          }}
        >
          CONTACT US
        </Button>
      </Toolbar>
    </AppBar>
  );
};
