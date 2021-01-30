import { ThemeProvider } from 'theme-ui';
import theme, { globalStyles } from '../theme';
import { Global, css } from '@emotion/core';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Global
        styles={css`
          ${globalStyles};
        `}
      /> */}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
