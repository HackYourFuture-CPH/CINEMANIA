import styled from '@emotion/styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  AppBar,
  Box,
  Button,
  Grid,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { OrderContext } from '../../context/orderContext';
import { useUserContext } from '../../context/UserContext';

const NavLink = (props) => {
  const { pathname } = useLocation();
  const isActive = pathname === props.to; // Updated prop name from "href" to "to"
  const linkColor = isActive ? 'red' : 'inherit';
  return (
    <Link style={{ textDecoration: 'none', color: linkColor }} {...props} />
  );
};

export const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { movieInCart } = React.useContext(OrderContext);
  const { userId, toggleLoginModal } = useUserContext();

  const onFavoriteClick = () => {
    if (!userId) {
      toggleLoginModal();
      return;
    }
    navigate('/favorites');
  };

  return (
    <StyledAppBar>
      <Box>
        <Toolbar
          sx={{
            margin: 'auto',
            width: '90%',
            height: '5.5rem',
            justifyContent: 'space-between',
          }}
        >
          <IconMenu>
            <NavIcon isActive={pathname === '/signin'}>
              <PersonIcon
                onClick={() => {
                  navigate('/signin');
                }}
                sx={{ borderRight: '2px solid #000000' }}
              />
            </NavIcon>
          </IconMenu>
          <Grid item xs={12} align="center">
            <Box>
              <NavLink to="/">
                <img
                  src="https://i.ibb.co/7JGHhKm/image.png"
                  alt="logo"
                  width="300"
                  height="100"
                />
              </NavLink>
            </Box>
          </Grid>
          <IconMenu>
            <NavIcon isActive={pathname === '/order'}>
              <ShoppingCartIcon
                onClick={() => {
                  navigate('/order');
                }}
              />
              {movieInCart.length > 0 && (
                <CountTypography variant="body">
                  {movieInCart.length}
                </CountTypography>
              )}
            </NavIcon>
            <NavIcon isActive={pathname === '/favorites'}>
              <FavoriteBorderIcon onClick={onFavoriteClick} />
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
        <NavButton>
          <NavLink to="/movies">CATEGORIES</NavLink>
        </NavButton>
        <NavButton>
          <NavLink to="/top100">THE TOP 100</NavLink>
        </NavButton>
        <NavButton>
          <NavLink to="/about">ABOUT</NavLink>
        </NavButton>
        <NavButton>
          <NavLink to="/contact-us">CONTACT US</NavLink>
        </NavButton>
      </Grid>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.palette.mainGreen};
  position: sticky;
  top: 0;
  font-family: 'Inter', sans-serif;
`;

const NavIcon = styled.button`
  background-color: transparent;
  color: ${(props) => (props.isActive ? 'red' : 'black')};
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
  font-size: 0.9rem;
  &:hover {
    color: ${(props) => props.theme.palette.hoverRed};
  }
`;

const CountTypography = styled(Typography)`
  font-size: 1.2rem;
  color: red;
  overflow: hidden;
  position: relative;
  bottom: 20px;
`;
