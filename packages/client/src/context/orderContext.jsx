import React from 'react';

export const OrderContext = React.createContext(null);

export const OrderContextProvider = ({ children }) => {
  const [movieInCart, setMovieInCart] = React.useState([]);

  const addMovieToCart = React.useCallback((movie) => {
    const newMovie = { ...movie };
    setMovieInCart((prevState) => [...prevState, newMovie]);
  }, []);

  const removeMovie = React.useCallback((movieId) => {
    setMovieInCart((prevState) => {
      const updatedCart = prevState.filter((movie) => movie.id !== movieId);
      return updatedCart;
    });
  }, []);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Movie added:', movieInCart);
  }, [movieInCart]);

  const contextValue = React.useMemo(
    () => ({ movieInCart, addMovieToCart, removeMovie }),
    [movieInCart, addMovieToCart, removeMovie],
  );

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};
