import { Layout, Heading, Box } from '../components';

const About = () => {
  return (
    <>
      <Layout>
        <Box sx={{ textAlign: 'center' }}>
          <Heading pb="s" as="h1">
            about page
          </Heading>
        </Box>
      </Layout>
    </>
  );
};

export default About;
