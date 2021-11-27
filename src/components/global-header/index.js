/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, Grid, Link, MenuButton, Box } from '..';
// import { SocialIcon } from 'react-social-icons';
import PropTypes from 'prop-types';
import { useWindowWidth } from '@react-hook/window-size';

const GlobalHeader = ({ router, isOpen, setIsOpen }) => {
  const pathName = router.pathname;
  const width = useWindowWidth();

  return (
    <Box>
      {width > 1265 ? (
        <Grid
          px="s"
          sx={{
            height: '60px'
          }}
        >
          <Flex start={[0]} end={[2]} sx={{ alignItems: 'center' }}>
            <Link
              as="h6"
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
              as="h6"
              data-testid="about"
              href="#part2"
              mr="m"
              sx={{
                borderBottom: pathName === '/about' ? '1px solid white' : ''
              }}
              // onClick={() => router.push('#part2')}
            >
              ABOUT
            </Link>
            <Link
              as="h6"
              data-testid="portfolio"
              href="#part2"
              mr="m"
              sx={{
                borderBottom: pathName === '/portfolio' ? '1px solid white' : ''
              }}
              // onClick={() => router.push('#part2')}
            >
              PORTFOLIO
            </Link>
            <Link
              as="h6"
              data-testid="contact"
              href="#part3"
              sx={{
                borderBottom: pathName === '/contact' ? '1px solid white' : ''
              }}
            >
              CONTACT
            </Link>
          </Flex>
        </Grid>
      ) : (
        <Grid
          pl="xs"
          sx={{
            height: '60px'
          }}
        >
          <Flex start={[0]} end={[2]} sx={{ alignItems: 'center' }}>
            <Link
              as="h6"
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
            start={[4, 9, 12]}
            end={[5, 10, 13]}
            sx={{ alignItems: 'center' }}
          >
            <MenuButton
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              onClick={() => console.log('click')}
            />
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
