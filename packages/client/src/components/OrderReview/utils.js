export const calculateTotalPrice = (movies) => {
  return movies.reduce((sum, movie) => sum + parseFloat(movie.price), 0);
};

export const calculateTotalPriceWithVAT = (totalPrice) => {
  return (totalPrice * 1.25).toFixed(2);
};
