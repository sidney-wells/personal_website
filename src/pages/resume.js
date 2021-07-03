import { Layout, Heading, Box } from '../components';

const Resume = () => {
  return (
    <>
      <Layout>
        <Box sx={{ textAlign: 'center' }}>
          <Heading pb="s" as="h1">
            resume page
          </Heading>
        </Box>
      </Layout>
    </>
  );
};

export default Resume;
