/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { GlobalHeader, Box } from '..';

const Layout = ({ children }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'space-between'
      }}
    >
      <header
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <GlobalHeader />
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
          variant: 'layout.main'
        }}
      >
        <Box
          sx={{
            maxWidth: 768,
            mx: 'auto',
            px: 3,
            variant: 'layout.container'
          }}
        >
          {children}
        </Box>
      </main>
    </div>
  );
};

export default Layout;
