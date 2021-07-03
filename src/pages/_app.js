import { ThemeProvider } from 'theme-ui';
import theme, { globalStyles } from '../theme';
import React from 'react';
import { Global, css } from '@emotion/react';

const App = ({ Component, pageProps }) => {
  return (
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
};

export default App;
