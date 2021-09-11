/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRouter } from 'next/router';
import { Flex, Button, Grid, Heading } from '..';
// import { SocialIcon } from 'react-social-icons';

const GlobalHeader = () => {
  const router = useRouter();

  const pathName = router.pathname;

  return (
    <Grid
      sx={{
        hight: '60px'
      }}
      sdfafdsa
    >
      <Flex
        start={1}
        end={2}
        pl="s"
        sx={{ alignItems: 'center', justifyContent: 'center' }}
      >
        {/* <Button
          data-testid="home"
          sx={{ color: pathName === '/' ? 'blue' : '' }}
          onClick={() => router.push('/')}
        >

        </Button> */}
        <Heading as="h4" onClick={() => router.push('/')}>
          Sidney
        </Heading>
      </Flex>
      <Flex
        start={2}
        end={10}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
      >
        {/* <Button
          data-testid="about"
          sx={{ color: pathName === '/about' ? 'blue' : '' }}
          onClick={() => router.push('/about')}
        >
          ABOUT
        </Button>
        <Button
          data-testid="projects"
          sx={{ color: pathName === '/projects' ? 'blue' : '' }}
          onClick={() => router.push('/projects')}
        >
          PROJECTS
        </Button> */}
        <Button
          data-testid="resume"
          sx={{ color: pathName === '/resume' ? 'blue' : '' }}
          onClick={() => router.push('/resume')}
        >
          RESUME
        </Button>
        <Button
          data-testid="contact"
          sx={{ color: pathName === '/contact' ? 'blue' : '' }}
          onClick={() => router.push('/contact')}
        >
          CONTACT
        </Button>
      </Flex>
      {/* <Flex
        start={11}
        end={12}
        sx={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}
      >
        <SocialIcon url="https://github.com/sidney-wells" />{' '}
      </Flex> */}
    </Grid>
  );
};

export default GlobalHeader;
