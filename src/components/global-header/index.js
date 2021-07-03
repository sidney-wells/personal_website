import { Flex, Button } from '..';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRouter } from 'next/router';
import { Grid } from 'theme-ui';
import { SocialIcon } from 'react-social-icons';

const GlobalHeader = () => {
  const router = useRouter();

  const pathName = router.pathname;

  return (
    <Grid
      sx={{
        verticalAlign: 'middle',
        height: '60px'
      }}
    >
      <Flex start={1} end={2} sx={{ justifyContent: 'flex-start' }}>
        <Button
          data-testid="home"
          sx={{ color: pathName === '/' ? 'blue' : '' }}
          onClick={() => router.push('/')}
        >
          Sidney Wells
        </Button>
      </Flex>
      <Flex
        start={2}
        end={10}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Button
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
        </Button>
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
      <Flex
        start={10}
        end={12}
        sx={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}
      >
        <SocialIcon url="https://github.com/sidney-wells" />{' '}
      </Flex>
    </Grid>
  );
};

export default GlobalHeader;
