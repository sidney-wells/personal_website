/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, Grid, Link, MenuButton, Box } from '..';
// import { SocialIcon } from 'react-social-icons';
import PropTypes from 'prop-types';
import { useWindowWidth } from '@react-hook/window-size';
import { useEffect, useState } from 'react';

const GlobalHeader = ({ router, isOpen, setIsOpen }) => {
  const pathName = router.pathname;
  const width = useWindowWidth();
  const [pageWidth, setPageWidth] = useState(1300);

  useEffect(() => {
    setPageWidth(width);
  });

  console.log('width', width);

  return (
    <Box>
      {pageWidth > 1065 ? (
        <Grid
          px="s"
          sx={{
            height: '60px'
          }}
        >
          <Flex start={[0]} end={[2]} sx={{ alignItems: 'center' }}>
            <Link
              size="m"
              data-testid="contact"
              href="#part1"
              sx={{
                borderBottom: pathName === '/contact' ? '1px solid white' : ''
              }}
            >
              SYMBOL
            </Link>
          </Flex>
          <Flex
            start={[2, 5, 9]}
            end={[5, 9, 13]}
            sx={{ alignItems: 'center', justifyContent: 'right' }}
          >
            <Link
              size="m"
              data-testid="about"
              // href="#part2"
              mr="m"
              sx={{
                borderBottom: pathName === '/about' ? '1px solid white' : ''
              }}
              onClick={() => router.push('#part2')}
            >
              ABOUT
            </Link>
            <Link
              size="m"
              data-testid="portfolio"
              // href="#part2"
              mr="m"
              sx={{
                borderBottom: pathName === '/portfolio' ? '1px solid white' : ''
              }}
              onClick={() => router.push('#part2')}
            >
              PORTFOLIO
            </Link>
            <Link
              size="m"
              data-testid="contact"
              // href="#part3"
              sx={{
                borderBottom: pathName === '/contact' ? '1px solid white' : ''
              }}
              onClick={() => router.push('#part2')}
            >
              CONTACT
            </Link>
          </Flex>
        </Grid>
      ) : (
        <Grid
          px="xs"
          sx={{
            height: '60px'
          }}
        >
          <Flex start={[0]} end={[2]} sx={{ alignItems: 'center' }}>
            <Link
              size="m"
              data-testid="contact"
              // href="#part1"
              sx={{
                borderBottom: pathName === '/contact' ? '1px solid white' : ''
              }}
              onClick={() => router.push('#part2')}
            >
              SYMBOL
            </Link>
          </Flex>
          <Flex
            start={[5, 10, 13]}
            end={[5, 10, 13]}
            sx={{ alignItems: 'center' }}
          >
            <MenuButton router={router} isOpen={isOpen} setIsOpen={setIsOpen} />
          </Flex>
        </Grid>
      )}
    </Box>
  );
};

export default GlobalHeader;

GlobalHeader.propTypes = {
  router: PropTypes.object,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func
};

GlobalHeader.defaultProps = {
  router: {}
};
