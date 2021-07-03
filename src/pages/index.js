import { Layout, Box, Section, Heading, Text } from '../components';
import { SocialIcon } from 'react-social-icons';

const Index = () => {
  return (
    <Layout variant="primary">
      <Section>
        <Box
          start={1}
          end={13}
          sx={{
            height: '800px',
            background: `url(../../images/laptop.jpg) no-repeat`,
            backgroundSize: 'cover'
          }}
        >
          <Heading as="h2" pt="l" sx={{ color: 'white', textAlign: 'center' }}>
            {`Cheers, I'm Sidney Wells`}
          </Heading>
          <Heading
            as="h4"
            pt="610px"
            sx={{ color: 'white', textAlign: 'center' }}
          >
            Adventurer, Health Enthusiast, Peacemaker, Software guy
          </Heading>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Text size="l">Feel free to follow me along my journey.</Text>
          <Text size="l">I look forward to connecting with you. </Text>
        </Box>
        <Box sx={{ margin: 'auto' }} pb="s">
          <SocialIcon
            url="https://twitter.com/1010101tyy"
            style={{ margin: '10px' }}
          />
          <SocialIcon
            url="https://www.instagram.com/_sidney_wells/?hl=en"
            style={{ margin: '10px' }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/sidney-l-wells-iii"
            style={{ margin: '10px' }}
          />
          <SocialIcon
            url="https://www.facebook.com/sidneywells101"
            style={{ margin: '10px' }}
          />
        </Box>
      </Section>
    </Layout>
  );
};

export default Index;
