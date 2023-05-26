import styled from '@emotion/styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { OrderContext } from '../../context/orderContext';
import { apiURL } from '../../apiURL';
import {
  AppBar,
  Box,
  Button,
  Grid,
  MenuItem,
  Toolbar,
  Avatar,
  Menu,
  Typography,
} from '@mui/material';

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
  const { user, logOut, userId } = useUserContext();
  const [amount, setAmount] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { movieInCart } = React.useContext(OrderContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const accountBalance = async () => {
      if (userId) {
        try {
          const response = await fetch(`${apiURL()}/tokens/${userId}`);
          const data = await response.json();
          setAmount(data[0].amount);
        } catch (error) {
          throw new Error('something went wrong');
        }
      }
    };
    if (userId) {
      accountBalance();
    }
  }, [user, userId]);

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
            {user ? (
              <NavIcon isActive={pathname === '/signin'}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    <Avatar
                      onClick={handleClick}
                      alt={`${user.email}`}
                      src="/static/images/avatar/2.jpg"
                      sx={{ background: 'black' }}
                    />
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={logOut}>Log out</MenuItem>
                    </Menu>
                  </Box>
                  <AccountBalance>
                    <Typography variant="body2" sx={{ color: 'white' }}>
                      Balance: {amount}
                    </Typography>
                  </AccountBalance>
                </Box>
              </NavIcon>
            ) : (
              <NavIcon isActive={pathname === '/signin'}>
                <PersonIcon
                  onClick={() => {
                    navigate('/signin');
                  }}
                  sx={{ borderRight: '2px solid #000000' }}
                />
              </NavIcon>
            )}
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
              <FavoriteBorderIcon
                onClick={() => {
                  navigate('/favorites');
                }}
              />
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

const AccountBalance = styled(Box)`
  background: black;
  padding: 0.7rem;
  border-radius: 0.5rem;
  margin-left: 0.2rem;
`;

const CountTypography = styled(Typography)`
  font-size: 1.2rem;
  color: red;
  overflow: hidden;
  position: relative;
  bottom: 20px;
`;
