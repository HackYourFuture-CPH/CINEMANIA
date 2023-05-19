import React from 'react';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';

import styled from '@emotion/styled';

export const Footer = () => {
  const footerLinks = [
    'Privacy policy',
    'Cookies policy',
    'Subscriber agreement',
    'Help',
    'Supported devices',
    'About us',
    'Manage preferences',
  ];

  const StyledBox = styled(Box)`
    margin-top: auto;
    width: 100%;
    left: 0;
    bottom: 0;
    right: 0;
  `;

  const StyledTypography = styled(Typography)`
    color: #ffffff;
    font-family: Inter, Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    line-height: 1.75rem;
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `;

  const StyledDivider = styled(Divider)`
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
    padding: 0;
    margin-right: 0;
    margin-left: 0;
    border: 1px solid #ffffff;
    width: 100%;
    transform: rotate(180deg);
  `;

  const StyledGrid = styled(Grid)`
    display: flex;
    flex: none;
    order: 4;
    flex-grow: 0;
    flex-wrap: wrap;
    gap: 2;
    justify-content: space-between;
    padding: 0;
  `;

  const StyledTypographyCopyRight = styled(Typography)`
    color: #777777;
    font-family: Inter, Arial, Helvetica, sans-serif;
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-top: 2.25rem;
    margin-bottom: 2.75rem;
    text-align: center;
  `;

  return (
    <StyledBox>
      <Container maxWidth="xl">
        <Grid item xs={12} align="center">
          <img
            src="https://i.ibb.co/WtvfPNV/image.png"
            alt="footer logo"
            border="0"
            width="300"
            height="80"
          />
        </Grid>
        <StyledDivider />

        <StyledGrid container maxWidth="xl">
          {footerLinks.map((link) => (
            <Grid item key={link}>
              <StyledTypography variant="subtitle1" component="a" href="#">
                {link}
              </StyledTypography>
            </Grid>
          ))}
        </StyledGrid>
        <StyledTypographyCopyRight>
          © {new Date().getFullYear()} Cinemania | All rights reserved.
        </StyledTypographyCopyRight>
      </Container>
    </StyledBox>
  );
};
