/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { GlobalHeader, Box, Footer } from '..';

const Layout = ({ variant, children }) => (
  <div
    sx={{
      minHeight: '100vh',
      m: '0px',
      p: '0px'
    }}
  >
    <header
      sx={{
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
          variant: `layout.main.${variant}`,
          display: 'table-cell'
        }}
      >
        {children}
      </Box>
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Layout;
