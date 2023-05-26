import React from 'react';
import { OrderReview } from './OrderReview';
import { BigMovieCard } from '../BigMovieCard/BigMovieCard';
import { OrderContext } from '../../context/orderContext';

export function HandleOrder() {
  const { movieInCart, addMovieToCart, removeMovie, currentMovie } =
    React.useContext(OrderContext);
  return (
    <>
      <div style={{ display: 'none' }}>
        <BigMovieCard
          currentMovie={currentMovie}
          addMovieToCart={addMovieToCart}
        />
      </div>
      <OrderReview movies={movieInCart} removeMovie={removeMovie} />
    </>
  );
}
