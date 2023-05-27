import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import styled from '@emotion/styled';
import { Box, Snackbar } from '@mui/material';

const SnackBarContext = createContext();

const SnackBarProvider = ({ children }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState({});

  const handleSnackbarOpen = useCallback(
    (title, message, type) => {
      setSnackbarContent({ title, message, type });
      setSnackbarOpen(true);
    },
    [setSnackbarContent, setSnackbarOpen],
  );

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const StyledSnackbarTitle = styled(Box)`
    font-weight: 800;
  `;

  const snackBarContextValue = useMemo(
    () => ({
      handleSnackbarOpen,
    }),
    [handleSnackbarOpen],
  );
  return (
    <SnackBarContext.Provider value={snackBarContextValue}>
      {children}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1500}
        onClose={handleSnackbarClose}
        message={
          <Box>
            <StyledSnackbarTitle
              color={
                snackbarContent.type === 'success' ? 'mainGreen' : 'hoverRed'
              }
            >
              {snackbarContent.title}
            </StyledSnackbarTitle>
            {snackbarContent.message}
          </Box>
        }
      />
    </SnackBarContext.Provider>
  );
};

const useSnackbar = () => {
  return useContext(SnackBarContext);
};

export { SnackBarProvider, useSnackbar };
