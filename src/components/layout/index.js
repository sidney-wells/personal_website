/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { GlobalHeader, Box, Footer } from '..';

const Layout = ({ children }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'space-between',
        m: '0px',
        p: '0px'
      }}
    >
      <header
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          variant: 'layout.header'
        }}
      >
        <GlobalHeader />
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
          variant: 'layout.main',
          display: 'table',
          minHeight: '100vh'
        }}
      >
        <Box
          sx={{
            mx: 'auto',
            variant: 'layout.main',
            display: 'table-cell'
          }}
        >
          {children}
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
