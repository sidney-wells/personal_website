import { Text, Layout, Heading, Box } from '../components';

const Index = () => {
  return (
    <>
      <Layout>
        <Box sx={{ textAlign: 'center' }}>
          <Heading pb="s" as="h1">
            hi.
          </Heading>
          <Text size="l">words words words.</Text>
        </Box>
      </Layout>
    </>
  );
};

export default Index;
