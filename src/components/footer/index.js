import { jsx } from 'theme-ui';
import { Box, Flex, Text } from '..';
/** @jsxRuntime classic */
/** @jsx jsx */

const Footer = () => {
  const Copyright = () => (
    <Flex
      sx={{
        justifyContent: 'center',
        verticalAlign: 'middle'
      }}
    >
      <Text pr="5px">Copyright</Text>
      <Text pr="5px">©</Text>
      <Text pr="5px">Sidney Wells</Text>

      <Text>{new Date().getFullYear()}</Text>
    </Flex>
  );

  return (
    <Flex
      sx={{
        variant: 'layout.footer',
        display: 'table',
        height: '60px',
        width: '100%'
      }}
    >
      <Box
        sx={{
          display: 'table-cell',
          verticalAlign: 'middle'
        }}
      >
        {Copyright()}
      </Box>
    </Flex>
  );
};

export default Footer;
