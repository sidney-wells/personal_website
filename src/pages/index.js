// import { SocialIcon } from 'react-social-icons';
import { Layout, Box, Section, Heading, Text, Image } from '../components';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  return (
    <Layout variant="primary" router={router}>
      <Section id="part1" type="primary" my="60px" sx={{ paddingTop: '250px' }}>
        <Box start={3} end={6}>
          <Image
            src="../../images/prof_pic2.jpeg"
            size="fill"
            sx={{ borderRadius: '50%' }}
          />
        </Box>
        <Box start={7} end={11} m="auto">
          <Heading as="h3" sx={{ color: 'white' }}>
            {"Cheers, I'm Sidney."}
          </Heading>
          <Heading as="h4" pt="s" sx={{ color: 'white' }}>
            {"I'm a software engineer with a passion for web development."}
          </Heading>
          <Heading as="h4" pt="s">
            I look forward to connecting with you.
          </Heading>
        </Box>
        {/* <Box sx={{ margin: 'auto' }} pb="s">
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
      </Box> */}
      </Section>
      <Box bg="white" id="part2">
        <Section>
          <Box start={1} end={13} m="auto">
            <Heading as="h2" pt="l" sx={{ color: 'black' }}>
              My Projects
            </Heading>
          </Box>
          {/* <Box sx={{ margin: 'auto' }} pb="s">
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
      </Box> */}
        </Section>
      </Box>
      <Section id="part3" type="primary" mt="60px" sx={{ paddingTop: '250px' }}>
        <Box start={3} end={6}>
          <Image
            src="../../images/prof_pic2.jpeg"
            size="fill"
            sx={{ borderRadius: '50%' }}
          />
        </Box>
        <Box start={7} end={11} m="auto">
          <Heading as="h3" sx={{ color: 'white' }}>
            {"Cheers, I'm Sidney."}
          </Heading>
          <Heading as="h4" pt="s" sx={{ color: 'white' }}>
            {"I'm a software engineer with a passion for web development."}
          </Heading>
          <Heading as="h4" pt="s">
            I look forward to connecting with you.
          </Heading>
        </Box>
        <Heading as="h4" pt="s">
          I look forward to connecting with you.
        </Heading>
        <Heading as="h4" pt="s">
          I look forward to connecting with you.
        </Heading>
      </Section>
      <Heading as="h4" pt="s">
        I look forward to connecting with you.
      </Heading>
      <Heading as="h4" pt="s">
        I look forward to connecting with you.
      </Heading>
      <Heading as="h4" pt="s">
        I look forward to connecting with you.
      </Heading>
    </Layout>
  );
};

export default Index;
