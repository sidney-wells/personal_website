/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, Button, Grid, Heading, Link } from '..';
// import { SocialIcon } from 'react-social-icons';
import PropTypes from 'prop-types';

const GlobalHeader = ({ router }) => {
  const pathName = router.pathname;

  return (
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
        start={[2, 5, 10]}
        end={[5, 9, 13]}
        sx={{ alignItems: 'center', justifyContent: 'right' }}
      >
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
  );
};

export default GlobalHeader;

GlobalHeader.propTypes = {
  router: PropTypes.object
};

GlobalHeader.defaultProps = {
  router: {}
};
