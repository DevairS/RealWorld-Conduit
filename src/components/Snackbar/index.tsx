import React, { useEffect, useState } from 'react';
import { Slide } from '@material-ui/core';
import { Wrapper, Alert } from './styles';

type TypeOptions = 'info' | 'success' | 'warning' | 'error';

type Props = {
  message: string;
  type: TypeOptions;
  id: string;
};

const Snackbar: React.FC<Props> = ({ message, type, id }) => {
  const [show, setShow] = useState(true);
  const toastContainerElement: HTMLElement | null =
    document.getElementById('toastContainer');

  const handleClose = (): void => {
    setShow(false);

    if (toastContainerElement) {
      toastContainerElement.style.display = 'none';
    }
  };

  useEffect(() => {
    setShow(true);
    setTimeout(handleClose, 4000);

    if (toastContainerElement) {
      toastContainerElement.style.display = 'block';
    }
  }, []);

  return (
    <Wrapper
      id={id}
      key={id}
      open={show}
      onClose={handleClose}
      TransitionComponent={(props) => <Slide {...props} direction="right" />}
      message={message}
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      autoHideDuration={4000}
    >
      <Alert
        variant="filled"
        onClose={handleClose}
        elevation={4}
        severity={type}
      >
        {message}
      </Alert>
    </Wrapper>
  );
};

export const SnackbarProvider: React.FC = () => <div id="toastContainer" />;

export default Snackbar;
