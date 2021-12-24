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
            {/* Name */}
            Lorem Ipsum is simply
          </Heading>
          <Heading as="h3" pt="s" sx={{ color: 'white' }}>
            {/* I am a software developer */}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since{' '}
          </Heading>
          <Heading as="h3" pt="s">
            {/* I look forward to connecting with you. */}
            Lorem Ipsum Lorem Ipsum Lorem Ipsum
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
          style={{ margirffn: '10px' }}
        />
      </Box> */}
      </Section>
    </Layout>
  );
};

export default Index;