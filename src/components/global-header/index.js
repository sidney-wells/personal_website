import { Link, Box, Flex } from '..';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

const GlobalHeader = () => {
  return (
    <Flex
      sx={{
        display: 'table',
        height: '200px'
      }}
    >
      <Box sx={{ display: 'table-cell', verticalAlign: 'middle' }}>
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
        <Link size="l" href="/work">
          PROJECTS
        </Link>
      </Box>
    </Flex>
  );
};

export default GlobalHeader;
