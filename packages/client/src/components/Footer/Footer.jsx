import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  const footerLinks = [
    'Privacy policy',
    'Cookies policy',
    'Subscriber agreement',
    'Help',
    'Supported devices',
    'About us',
    'Manage preferences',
  ];

  const linkStyle = {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: '1.5rem',
    lineHeight: '1.813rem',
    fontStyle: 'normal',
    fontWeight: '400',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: '#1E1E1E',
        marginTop: theme.spacing(8),
        padding: theme.spacing(0, 0),
        width: '100%',
      }}
    >
      <Container maxWidth="xl">
        <Grid item xs={12} align="center">
          <Box>
            <img
              src="https://i.ibb.co/WtvfPNV/image.png"
              alt="footer logo"
              border="0"
              width="300"
              height="80"
            />
          </Box>
        </Grid>
        <Divider
          variant="middle"
          color="#FFFFFF"
          width="100%"
          border="1px solid #FFFFFF"
          transform="rotate(180deg)"
          sx={{
            marginTop: theme.spacing(4.626),
            marginBottom: theme.spacing(4.626),
            padding: 0,
            mr: 0,
            ml: 0,
          }}
        />

        <Grid
          container
          maxWidth="xl"
          sx={{
            display: 'flex',
            flex: 'none',
            order: 4,
            flexGrow: 0,
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'space-between',
            padding: 0,
          }}
        >
          {footerLinks.map((link) => (
            <Grid item key={link}>
              <Typography
                variant="subtitle1"
                component="a"
                href="#"
                style={linkStyle}
              >
                {link}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Typography
          fontFamily="Inter"
          variant="body2"
          color="#777777"
          align="center"
          style={{
            marginTop: theme.spacing(4.626),
            marginBottom: theme.spacing(5.5),
            fontSize: '1.25rem',
            lineHeight: '1.5rem',
          }}
        >
          © {new Date().getFullYear()} Cinemania | All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;
