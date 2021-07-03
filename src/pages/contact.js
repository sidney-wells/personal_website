import { Layout, Heading, Box } from '../components';

const Contact = () => {
  return (
    <>
      <Layout>
        <Box sx={{ textAlign: 'center' }}>
          <Heading pb="s" as="h1">
            contact page
          </Heading>
        </Box>
      </Layout>
    </>
  );
};

export default Contact;
