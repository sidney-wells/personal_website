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
            px: 3,
            variant: 'layout.container',
            display: 'table-cell',
            verticalAlign: 'middle'
          }}
        >
          {children}
        </Box>
      </main>
    </div>
  );
};

export default Layout;
