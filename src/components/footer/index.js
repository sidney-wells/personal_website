import { Link, Box, Flex, Text } from '..';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

const Footer = () => {
  const Copyright = () => {
    return (
      <Flex>
        <Text pr="xs">{'Copyright'}</Text>
        <Text pr="xs">{'© '}</Text>
        <Link size="l" href="/" pr="xs">
          Sidney Wells
        </Link>{' '}
        <Text>
          {new Date().getFullYear()}
          {'.'}
        </Text>
      </Flex>
    );
  };

  return (
    <Box
      sx={{
        variant: 'layout.footer',
        textAlign: 'center',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}
    >
      <Flex
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Link size="l" href="/">
          HOME
        </Link>
        <Link
          size="l"
          sx={{ ml: ['s', 'm', 'l'], mr: ['s', 'm', 'l'] }}
          href="/about"
        >
          ABOUT
        </Link>
        <Link size="l" href="/projects">
          PROJECTS
        </Link>
      </Flex>
      <Flex
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {Copyright()}
      </Flex>
    </Box>
  );
};

export default Footer;
