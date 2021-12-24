/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { GlobalHeader, Box, Footer } from '..';
import { useState } from 'react';

const Layout = ({ router, variant, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      onClick={() => (!isOpen ? {} : setIsOpen(false))}
      sx={{
        m: '0px',
        p: '0px',
        scrollBehavior: 'smooth'
        // background: isOpen && 'rgba(0, 0, 0, .7)'
      }}
    >
      <header
        sx={{
          variant: 'layout.header'
          // opacity: isOpen ? '.2' : 1,
          // background: isOpen && 'rgb(0, 0, 0, .2)'
        }}
      >
        <GlobalHeader isOpen={isOpen} setIsOpen={setIsOpen} router={router} />
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
          variant: 'layout.main',
          display: 'table'
          // background: isOpen ? 'rgba(0, 0, 0, .2)' : 'white'
        }}
      >
        <Box
          sx={{
            mx: 'auto',
            variant: `layout.main.${variant}`,
            display: 'table-cell',
            // background: isOpen ? 'rgba(0, 0, 0, .2)' : 'white'
            // opacity: isOpen ? '.2' : 1,
            zIndex: -2
          }}
          {...props}
        >
          {children}
        </Box>
      </main>
      <Footer />
    </Box>
  );
};

Layout.propTypes = {
  router: PropTypes.object,
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Layout;
