import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const OrderContext = React.createContext(null);

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

export const OrderContextProvider = ({ children }) => {
  const [movieInCart, setMovieInCart] = useState(() => {
    const storedMovieInCart = localStorage.getItem('movieInCart');
    return storedMovieInCart ? JSON.parse(storedMovieInCart) : [];
  });

  const [alert, setAlert] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const togglePopUp = () => {
    setIsPopUpOpen((prevState) => !prevState);
  };

  const addMovieToCart = React.useCallback(
    (movie) => {
      const isMovieAlreadyInCart = movieInCart.some(
        (cartMovie) => cartMovie.id === movie.id,
      );
      if (isMovieAlreadyInCart) {
        return setAlert(
          <Alert severity="warning">This movie is already in your cart!</Alert>,
        );
      }
      const newMovie = { ...movie };
      setMovieInCart((prevState) => [...prevState, newMovie]);
      setIsPopUpOpen(true);
      setAlert(<Alert severity="success">Movie added to cart!</Alert>);
    },
    [movieInCart],
  );

  const removeMovie = React.useCallback((movieId) => {
    setMovieInCart((prevState) => {
      const updatedCart = prevState.filter((movie) => movie.id !== movieId);
      setAlert(<Alert severity="success">Movie removed from cart!</Alert>);
      return updatedCart;
    });
  }, []);

  React.useEffect(() => {
    localStorage.setItem('movieInCart', JSON.stringify(movieInCart));
  }, [movieInCart]);

  const contextValue = React.useMemo(
    () => ({
      movieInCart,
      addMovieToCart,
      removeMovie,
      isPopUpOpen,
      togglePopUp,
    }),
    [movieInCart, addMovieToCart, removeMovie, isPopUpOpen],
  );

  return (
    <>
      <Snackbar
        open={alert !== null}
        autoHideDuration={3000}
        onClose={() => setAlert(null)}
      >
        {alert}
      </Snackbar>
      <OrderContext.Provider value={contextValue}>
        {children}
      </OrderContext.Provider>
    </>
  );
};
