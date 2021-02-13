import {
  Text,
  Layout,
  Heading,
  Box,
  ProjectCardList,
  Section,
  Button,
  Link
} from '../components';

const Index = () => {
  return (
    <Layout>
      <Section pt="xl" variant="hero">
        <Box start={4} end={10}>
          <Heading as="h2" pb="s">
            {'Sidney Wells'}
          </Heading>
          <Heading as="h4" pb="s">
            <em>{'Full Stack Developer'}</em>
          </Heading>
          <Heading as="h4" pb="s">
            {'Transitioning Active Duty Military'}
          </Heading>
          <Heading as="h4" pb="s">
            {'Air Force'}
          </Heading>
        </Box>
        <Box start={4} span={4}>
          <Button onClick={() => console.log('here')}>
            <Link href="/#recent-projects"> Recent Projects</Link>
          </Button>
        </Box>
      </Section>
      <Section pb="xl">
        <Box start={2} end={12} id="recent-projects">
          <Text mb="m" sx={{ color: 'text', fontWeight: 'bold' }} size="l">
            My Recent Projects
          </Text>
          <ProjectCardList />
        </Box>
      </Section>
    </Layout>
  );
};

export default Index;
