import React from 'react';
import { AppBar, Toolbar, Box, Button, Grid, MenuItem } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';

export const Navbar = () => {
  return (
    <AppBar component="nav" width="100%" sx={{ bgcolor: 'mainGreen' }}>
      <Toolbar
        fontFamily="Inter"
        sx={{
          height: '3rem',
          justifyContent: 'space-around',
        }}
      >
        <MenuItem>
          <PersonIcon
            sx={{ width: '1.75rem', height: '1.75rem', color: 'black' }}
          />
        </MenuItem>
        <Grid item xs={12} align="center">
          <Box>
            <img
              src="https://i.ibb.co/7JGHhKm/image.png"
              alt="nav bar logo"
              border="0"
              width="286"
              height="98"
            />
          </Box>
        </Grid>

        <MenuItem>
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
        </MenuItem>
      </Toolbar>

      <Toolbar
        sx={{
          height: '4.75rem',
          background: '#000000',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
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
