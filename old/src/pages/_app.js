/* eslint-disable react/prop-types */
import { ThemeProvider } from 'theme-ui';
import React from 'react';
import { Global, css } from '@emotion/react';
import theme, { globalStyles } from '../theme';

const App = ({ Component, pageProps }) => (
  <div>
    <Global
      styles={css`
        ${globalStyles}
      `}
    />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </div>
);

export default App;
