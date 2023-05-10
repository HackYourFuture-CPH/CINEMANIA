import React from 'react';
import { AppBar, Toolbar, Box, Button, Grid, MenuItem } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';

const buttonStyles = {
  color: '#FFFFFF',
  fontSize: '1.1rem',
  fontWeight: '400',
};

export const Navbar = () => {
  return (
    <AppBar component="nav" width="100%" sx={{ bgcolor: 'mainGreen' }}>
      <Box sx={{ padding: '0.6rem 8.75rem' }}>
        <Toolbar
          fontFamily="Inter"
          sx={{
            height: '6rem',
            justifyContent: 'space-between',
          }}
        >
          <MenuItem>
            <PersonIcon
              sx={{
                width: '1.75rem',
                height: '1.75rem',
                color: 'black',
                borderRight: '2px solid #000000',
                paddingRight: '.5rem',
              }}
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
                marginRight: '1.25rem',
              }}
            />
            <FavoriteBorderIcon
              sx={{
                width: '1.9rem',
                height: '1.75rem',
                color: '#000000',
                marginLeft: '1.25rem',
              }}
            />
          </MenuItem>
        </Toolbar>
      </Box>
      <Grid
        sx={{
          display: 'flex',
          height: '4.75rem',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#000000',
          gap: '8rem',
        }}
      >
        <Button sx={buttonStyles}>CATEGORIES</Button>
        <Button sx={buttonStyles}>THE TOP 100</Button>
        <Button sx={buttonStyles}>ABOUT</Button>
        <Button sx={buttonStyles}>CONTACT US</Button>
      </Grid>
    </AppBar>
  );
};
