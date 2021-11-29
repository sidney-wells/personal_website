import { Twirl as Hamburger } from 'hamburger-react';
import PropTypes from 'prop-types';
import { Flex, Heading, Box, Text, Button } from '..';

const MenuButtons = ({ router, isOpen = false, setIsOpen = () => !isOpen }) => {
  const pathName = '';

  return (
    <Box>
      <Box sx={{ zIndex: 3 }}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </Box>
      <Flex
        sx={{
          zIndex: -1,
          // border: 'solid 1px black',
          position: 'absolute',
          top: '0px',
          right: '0px',
          //   backgroundColor: 'green',
          width: isOpen ? '200px' : '0px',
          transition: isOpen ? 'ease-in 2s, width 1s' : 'ease-out 2s, width 1s',
          visibility: isOpen ? 'visible' : 'hidden',
          background: 'white',
          opacity: 1
        }}
      >
        {/* <Heading as="h1">Open</Heading> */}
        <Box mt="l" sx={{ position: 'relative' }}>
          <Box>
            <Button
              size="l"
              pr="xl"
              data-testid="about"
              href="#part2"
              sx={{
                fontWeight: 'bold',
                borderBottom: pathName === '/about' ? '1px solid white' : '',
                border: 'none',
                width: '100%'
              }}
              onClick={() => router.push('#part2')}
            >
              ABOUT
            </Button>
          </Box>
          <Box>
            <Button
              size="l"
              data-testid="portfolio"
              href="#part2"
              pr="xl"
              // mr="m"
              sx={{
                borderBottom:
                  pathName === '/portfolio' ? '1px solid white' : '',
                border: 'none',
                width: '100%'
              }}
              // onClick={() => router.push('#part2')}
            >
              PORTFOLIO
            </Button>
          </Box>
          <Box>
            <Button
              size="l"
              data-testid="contact"
              href="#part3"
              pr="xl"
              sx={{
                borderBottom: pathName === '/contact' ? '1px solid white' : '',
                border: 'none',
                width: '100%'
              }}
            >
              CONTACT
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

MenuButtons.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  router: PropTypes.func
};

export default MenuButtons;
