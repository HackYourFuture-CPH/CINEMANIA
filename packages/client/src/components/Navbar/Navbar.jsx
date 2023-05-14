import React from 'react';
import styled from '@emotion/styled';
import { AppBar, Toolbar, Box, Button, Grid, MenuItem } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';

export const Navbar = () => {
  return (
    <StyledAppBar>
      <Box>
        <Toolbar
          sx={{
            height: '4rem',
            justifyContent: 'space-between',
          }}
        >
          <IconMenu>
            <NavIcon>
              <PersonIcon
                sx={{ borderRight: '2px solid #000000' }}
              />
            </NavIcon>
          </IconMenu>
          <Grid item xs={12} align="center">
            <Box>
              <img
                src="https://i.ibb.co/7JGHhKm/image.png"
                alt="logo"
                width="250"
                height="68"
              />
            </Box>
          </Grid>
          <IconMenu>
            <NavIcon>
              <ShoppingCartIcon />
            </NavIcon>
            <NavIcon>
              <FavoriteBorderIcon />
            </NavIcon>
          </IconMenu>
        </Toolbar>
      </Box>
      <Grid
        sx={{
          display: 'flex',
          height: '2.75rem',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#000000',
          gap: '8rem',
        }}
      >
        <NavButton>CATEGORIES</NavButton>
        <NavButton>THE TOP 100</NavButton>
        <NavButton>ABOUT</NavButton>
        <NavButton>CONTACT US</NavButton>
      </Grid>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.palette.mainGreen};
  position: sticky;
  top: 0;
  font-family: 'Inter';
`;

const NavIcon = styled.button`
  background-color: transparent;
  color: 'black';
  cursor: pointer;
  border: none;
  width: '2rem';
  height: '2rem';
  border-right: '2px solid #000000';
  padding-right: '.5rem';
  outline: none;
  &:hover {
    color: ${(props) => props.theme.palette.hoverRed};
  }
`;

const IconMenu = styled(MenuItem)`
  box-shadow: none;
  &:hover {
    background-color: transparent;
  }
`;

const NavButton = styled(Button)`
   color: white;
  font-size: .9rem;
  &:hover {  color: ${(props) => props.theme.palette.hoverRed}; 
`;
