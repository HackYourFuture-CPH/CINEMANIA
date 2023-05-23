import React from 'react';
import {
  Container,
  Box,
  Typography,
  Divider,
  Button,
  Checkbox,
} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import styled from '@emotion/styled';

export const OrderReview = () => {
  return (
    <CartContainer maxWidth="l">
      <CartItemsBox sx={{ my: 4 }}>
        <CartTypographyBox>
          <CartTypographyTitle variant="h4">
            Shopping Basket
          </CartTypographyTitle>
          <CartTypographyOrderID variant="h5">Order ID:</CartTypographyOrderID>
        </CartTypographyBox>
        <CartTypographyBox>
          <CartTypographyPrice variant="subtitle2">
            Deselect
          </CartTypographyPrice>
          <CartTypographyPrice variant="subtitle2">Price</CartTypographyPrice>
        </CartTypographyBox>
        <StyledDivider />
        <ItemsContainer className="ItemsContainer">
          <ItemBox>
            <SelectCheckbox
              // checked={checked}
              // onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <ItemsCard>
              <ItemsCardMedia
                component="img"
                src="https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
              />
              <ItemsCardContent>
                <TitlePriceBox>
                  <ItemsCardTypographyTitle variant="h4">
                    Guardians of the Galaxy Vol. 3
                  </ItemsCardTypographyTitle>
                  <ItemsCardTypographyPrice>70</ItemsCardTypographyPrice>
                </TitlePriceBox>
                <ItemsCardTypographyDescription variant="h5">
                  Lorem ipsum dolor sit amet consectetur. Dis tellus vel eget a
                  pharetra tortor.
                </ItemsCardTypographyDescription>
                <ItemFavRemoveBox>
                  <FavRemoveBox>
                    <StyledFavoriteBorderOutlinedIcon />
                    <FavoriteTypography variant="h6">
                      Move to my favorites
                    </FavoriteTypography>
                  </FavRemoveBox>
                  <FavRemoveDivider orientation="vertical" flexItem />
                  <FavRemoveBox>
                    <StyledDeleteOutlineOutlinedIcon />
                    <RemoveTypography variant="h6">
                      Remove from cart
                    </RemoveTypography>
                  </FavRemoveBox>
                </ItemFavRemoveBox>
              </ItemsCardContent>
            </ItemsCard>
          </ItemBox>
        </ItemsContainer>
        <StyledDivider />
      </CartItemsBox>
      <OrderSummaryContainer>
        <SummaryBox>
          <SummaryTypography variant="h4">Order Summary</SummaryTypography>
          <StyledDividerSummary />
          <Typography variant="h6">Items:2</Typography>
          <StyledDividerSummary />
          <SummaryTypographyTotal variant="h4">
            Order Total: 95
          </SummaryTypographyTotal>
          <StyledDividerSummary />
          <SummaryTypographyVAT variant="h5">
            Order totals include VAT
          </SummaryTypographyVAT>
          <PaymentButton variant="contained" color="primary">
            <Typography variant="h6" display="block">
              Payment
            </Typography>
          </PaymentButton>
        </SummaryBox>
      </OrderSummaryContainer>
    </CartContainer>
  );
};

const CartContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CartItemsBox = styled(Box)`
  width: 66%;
  height: 73rem;
  background: linear-gradient(
      110.45deg,
      rgba(0, 60, 45, 0.5) 0%,
      rgba(0, 0, 0, 0) 84.43%
    ),
    #00ffc2;
`;

const CartTypographyBox = styled(Box)`
  margin: 2rem 3.25rem;
  display: flex;
  justify-content: space-between;
`;

const CartTypographyTitle = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 2.5rem;
`;

const CartTypographyOrderID = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 2.25rem;
`;

const CartTypographyPrice = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
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
  height: 30rem;
`;

const ItemBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 28rem;
`;

const SelectCheckbox = styled(Checkbox)`
  display: block;
  fill: false;
  color: #001b14;
`;

const ItemsCard = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

const ItemsCardMedia = styled(Box)`
  width: 17.75rem;
  height: 100%;
  margin: 0rem 3.25rem;
`;

const ItemsCardContent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
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
  font-size: 32px;
  color: #003c2d;
`;

const ItemsCardTypographyPrice = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 39px;
  color: #003c2d;
`;

const ItemsCardTypographyDescription = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  align-self: center;
`;

const ItemFavRemoveBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 65%;
`;

const FavRemoveBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledFavoriteBorderOutlinedIcon = styled(FavoriteBorderOutlinedIcon)`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledDeleteOutlineOutlinedIcon = styled(DeleteOutlineOutlinedIcon)`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.75rem;
`;

const FavoriteTypography = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #003e2f;
`;

const RemoveTypography = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #003e2f;
`;

const FavRemoveDivider = styled(Divider)`
  border: 1px solid #003c2d;
`;

const SummaryTypography = styled(Typography)`
  font-weight: 700;
`;

const OrderSummaryContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 34rem;
  margin-top: 2rem;
  margin-left: 3.25rem;
  border: 1px solid #000000;
  background: #00ffc2;
`;

const SummaryBox = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 18.25rem;
  margin-top: 4rem;
`;

const StyledDividerSummary = styled(Divider)`
  position: relative;
  margin: 1.5rem 0;
  padding: 0;
  border: 1px solid #000000;
  width: 95%;
  transform: rotate(180deg);
`;

const SummaryTypographyTotal = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 2.5rem;
  color: #001b14;
`;
const SummaryTypographyVAT = styled(Typography)`
  font-weight: 400;
  font-size: 25px;
  font-family: 'Inter';
  font-style: normal;
  line-height: 30px;
  color: #001b14;
`;

const PaymentButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  margin-top: 4rem;
  width: 100%;
  height: Hug (4rem);
  background: #003e2f;
  border-radius: 50px;
  color: #00ffc2;
`;
