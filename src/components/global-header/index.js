import { Link, Box, Flex, Text } from '..';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRouter } from 'next/router';

const GlobalHeader = () => {
  const router = useRouter();

  return (
    <Flex
      sx={{
        display: 'table',
        height: '200px'
      }}
    >
      <Box
        sx={{
          display: 'table-cell',
          verticalAlign: 'middle'
        }}
      >
        <Link size="l" href="/">
          <Text
            pb="s"
            sx={{
              color: router
                ? router.pathname === '/'
                  ? 'purple'
                  : 'inherit'
                : '',
              borderBottom: router
                ? router.pathname === '/'
                  ? `2px solid #6930c3`
                  : ''
                : ''
            }}
          >
            HOME
          </Text>
        </Link>
        <Link
          size="l"
          sx={{ ml: ['s', 'm', 'l'], mr: ['s', 'm', 'l'] }}
          href="/about"
        >
          <Text
            pb="s"
            sx={{
              color: router
                ? router.pathname === '/about'
                  ? 'purple'
                  : 'inherit'
                : '',
              borderBottom: router
                ? router.pathname === '/about'
                  ? `2px solid #6930c3`
                  : ''
                : ''
            }}
          >
            ABOUT
          </Text>
        </Link>

        <Link size="l" href="/projects">
          <Text
            pb="s"
            sx={{
              color: router
                ? router.pathname === '/projects'
                  ? 'purple'
                  : 'inherit'
                : '',
              borderBottom: router
                ? router.pathname === '/projects'
                  ? `2px solid #6930c3`
                  : ''
                : ''
            }}
          >
            PROJECTS
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default GlobalHeader;
