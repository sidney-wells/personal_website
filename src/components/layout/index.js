/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { GlobalHeader, Box, Footer } from '..';

const Layout = ({ router, variant, children, ...props }) => (
  <div
    sx={{
      m: '0px',
      p: '0px',
      scrollBehavior: 'smooth'
    }}
  >
    <header
      sx={{
        variant: 'layout.header'
      }}
    >
      <GlobalHeader router={router} />
    </header>
    <main
      sx={{
        width: '100%',
        flex: '1 1 auto',
        variant: 'layout.main',
        display: 'table'
      }}
    >
      <Box
        sx={{
          mx: 'auto',
          variant: `layout.main.${variant}`,
          display: 'table-cell'
        }}
        {...props}
      >
        {children}
      </Box>
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  router: PropTypes.object,
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Layout;
