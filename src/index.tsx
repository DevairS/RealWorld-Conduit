import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import light from './styles/Themes/light';
import Routes from './routes';
import { AuthProvider } from './Context/AuthContext';
import { SnackbarProvider } from './components/Snackbar';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <SnackbarProvider />
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
