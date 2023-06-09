import * as React from 'react';
import { OrderContext } from '../../context/orderContext';
import {
  Box,
  Button,
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { MovieDetailsLayout } from '../../containers/MovieDetailsLayout/MovieDetailsLayout';

export function AddToCartConfirmation(props) {
  const { isPopUpOpen, togglePopUp } = React.useContext(OrderContext);

  return isPopUpOpen && props.currentMovie ? (
    <MovieDetailsLayout>
      <PopUpContainer>
        <ModulCard>
          <CardMediaImg
            image={props?.currentMovie.image_location}
            alt={props?.currentMovie?.title}
          />
          <TextContent>
            <Title gutterBottom variant="h5" component="div">
              {props?.currentMovie.title}
            </Title>
            <NotificationTyp variant="body2" color="text.secondary">
              Added to your cart
            </NotificationTyp>
          </TextContent>
          <Box sx={{ height: '14.75rem', width: '7.5rem' }} />
          <CardButtons>
            <CheckOutButton onClick={() => togglePopUp()}>
              <StyledLink to="/order">Check out</StyledLink>
            </CheckOutButton>
            <ContinueShoppingBtn size="small" onClick={() => togglePopUp()}>
              Keep shopping
            </ContinueShoppingBtn>
          </CardButtons>
        </ModulCard>
      </PopUpContainer>
    </MovieDetailsLayout>
  ) : (
    ''
  );
}

const PopUpContainer = styled(Container)`
  position: fixed;
  width: 100%;
  max-width: 100vw !important;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 100;
  top: 0;
`;

const ModulCard = styled(Card)`
  width: 45rem;
  height: 50.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid red;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  position: relative;
  z-index: 100;
  overflow: visible;
  top: 24rem;
`;

const CardMediaImg = styled(CardMedia)`
  width: 18rem;
  height: 26.5rem;
  position: absolute;
  top: -13.5rem;
`;

const TextContent = styled(CardContent)`
  position: relative;
  top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Title = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #003c2d;
`;

const NotificationTyp = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: #003c2d;
`;

const CardButtons = styled(CardActions)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  bottom: 90px;
`;

const CheckOutButton = styled(Button)`
  width: 237px;
  height: 61px;
  background: ${(props) => props.theme.palette.darkGreen};
  border-radius: 50px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  &:hover {
    background: black;
  }
`;

const ContinueShoppingBtn = styled(Button)`
  width: 237px;
  height: 61px;
  border: 1px solid ${(props) => props.theme.palette.darkGreen};
  border-radius: 50px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: ${(props) => props.theme.palette.darkGreen};
  &:hover {
    background: ${(props) => props.theme.palette.mainGreen};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;
