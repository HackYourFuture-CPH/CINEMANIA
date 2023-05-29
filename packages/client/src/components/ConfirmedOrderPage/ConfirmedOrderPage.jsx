import React from 'react';
import { Container, Box, Typography, Divider, Button } from '@mui/material';
import styled from '@emotion/styled';
import { OrderPageLayout } from '../../containers/OrderPage/OrderPageLayout';
import {
  calculateTotalPrice,
  calculateTotalPriceWithVAT,
} from '../OrderReview/utils';
import { OrderContext } from '../../context/orderContext';
import { Link } from 'react-router-dom';

export const ConfirmedOrderPage = ({ movies }) => {
  const { isPopUpOpen, togglePopUp } = React.useContext(OrderContext);

  const totalPrice = calculateTotalPrice(movies);
  const totalPriceWithVAT = calculateTotalPriceWithVAT(totalPrice);

  return isPopUpOpen ? (
    <OrderPageLayout>
      <PopUpContainer>
        <CartItemsBox sx={{ my: 4 }}>
          <CartTypographyBoxTitle sx={{ justifyContent: 'center' }}>
            <CartTypographyTitle variant="h4">Your Order</CartTypographyTitle>
          </CartTypographyBoxTitle>
          <CartTypographyBoxPrice sx={{ justifyContent: 'flex-end', mt: 0 }}>
            <CartTypographyPrice variant="subtitle2">Price</CartTypographyPrice>
          </CartTypographyBoxPrice>
          <StyledDivider />

          {movies.map((movie) => (
            <ItemsContainer key={movie.id} className="ItemsContainer">
              <ItemBox>
                <ItemsCard>
                  <ItemsCardMedia
                    component="img"
                    src={movie.image_location}
                    alt={movie.title}
                  />
                  <ItemsCardContent>
                    <TitlePriceBox>
                      <ItemsCardTypographyTitle variant="h4">
                        {movie.title}
                      </ItemsCardTypographyTitle>
                      <ItemsCardTypographyPrice>
                        {movie.price}
                      </ItemsCardTypographyPrice>
                    </TitlePriceBox>
                  </ItemsCardContent>
                </ItemsCard>
              </ItemBox>
            </ItemsContainer>
          ))}
          <OrderSummaryContainer>
            <SummaryTypography variant="h4">
              Order Total ({movies.length} Items): {totalPriceWithVAT}
            </SummaryTypography>
          </OrderSummaryContainer>
          <ContinueShoppingBtn size="small" onClick={() => togglePopUp()}>
            <StyledLink to="/movies">Keep shopping </StyledLink>
          </ContinueShoppingBtn>
        </CartItemsBox>
      </PopUpContainer>
    </OrderPageLayout>
  ) : (
    ''
  );
};

const PopUpContainer = styled(Container)`
  position: absolute;
  width: 100%;
  max-width: 100vw !important;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 100;
  top: 0;
`;

const CartItemsBox = styled(Box)`
  position: relative;
  background: linear-gradient(
      110.45deg,
      rgba(0, 60, 45, 0.5) 0%,
      rgba(0, 0, 0, 0) 84.43%
    ),
    #00ffc2;
  width: 80%;
  top: 20rem;
  display: flex;
  flex-direction: column;
`;

const CartTypographyBoxTitle = styled(Box)`
  margin: 2rem 3.25rem 0rem;
  display: flex;
`;

const CartTypographyBoxPrice = styled(Box)`
  margin: 0rem 3.25rem 0rem;
  display: flex;
`;

const CartTypographyTitle = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 2.5rem;
`;

const CartTypographyPrice = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  align-content: flex-end;
`;

const StyledDivider = styled(Divider)`
  position: relative;
  margin: 1.5rem 0;
  padding: 0;
  border: 1px solid #000000;
  width: 95%;
  transform: rotate(180deg);
  left: 2rem;
`;

const ItemsContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
  border-bottom: 1px solid #000000;
`;

const ItemBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ItemsCard = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ItemsCardMedia = styled(Box)`
  width: 5rem;
  height: 7rem;
  margin: 0rem 3.25rem;
`;

const ItemsCardContent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const TitlePriceBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 2;
`;

const ItemsCardTypographyTitle = styled(Typography)`
  margin: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  color: #003c2d;
  max-width: 25rem;
`;

const ItemsCardTypographyPrice = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 39px;
  color: #003c2d;
`;

const SummaryTypography = styled(Typography)`
  font-weight: 700;
`;

const OrderSummaryContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  background: #00ffc2;
  align-items: flex-end;
`;

const ContinueShoppingBtn = styled(Button)`
  align-self: center;
  width: 237px;
  height: 61px;
  border: 1px solid ${(props) => props.theme.palette.darkGreen};
  border-radius: 50px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin: 2rem;
  color: ${(props) => props.theme.palette.darkGreen};
  &:hover {
    background: ${(props) => props.theme.palette.mainGreen};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;
