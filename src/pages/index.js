import { Text, Layout, Heading, Box, ProjectCard, Flex } from '../components';

const Index = () => {
  return (
    <>
      <Layout>
        <Box sx={{ textAlign: 'center' }}>
          <Heading pb="s" as="h1">
            {"hi, i'm sidney."}
          </Heading>
          <Text size="l">My Recent Projects</Text>
          <Flex>
            <ProjectCard>cards will go here</ProjectCard>
            <ProjectCard>cards will go here</ProjectCard>
            <ProjectCard>cards will go here</ProjectCard>
          </Flex>
        </Box>
      </Layout>
    </>
  );
};

export default Index;
