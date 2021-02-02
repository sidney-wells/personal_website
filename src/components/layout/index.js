/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

const Layout = ({ children }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        variant: 'layout.root'
      }}
    >
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
          variant: 'layout.main'
        }}
      >
        <div
          sx={{
            maxWidth: 768,
            mx: 'auto',
            px: 3,
            variant: 'layout.container'
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
