const breakpoints = ['500px', '1020px', '1600'];

const buttons = {
  primary: {
    color: 'white',
    backgroundColor: 'black',
    borderColor: '2px solid white'
  },
  secondary: {
    color: 'black',
    backgroundColor: 'white',
    borderColor: '2px solid black'
  }
};

const colors = {
  background: '#252525',
  purple: '#6930c3',
  turq: '#64dfdf',
  neon: '#80ffdb'
};

const fonts = {
  heading: '"Poppins", sans-serif',
  body: '"IBM Plex Sans", sans-serif',
  input: 'IBM Plex Mono',
  button: '"IBM Plex Sans", sans-serif'
};

const fontSizes = [12, 13, 14, 16, 20, 24, 30, 36, 56];

const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700
};

const layout = {
  root: {
    backgroundColor: 'violet'
  },
  header: {
    backgroundColor: 'blue',
    height: '44px'
  },
  main: {
    backgroundColor: 'black'
  },
  container: {
    border: '2px solid white'
  },
  footer: {
    backgroundColor: 'yellow',
    height: '44px'
  }
};

const space = [5, 15, 25, 50, 80];
space.xs = space[1];
space.s = space[2];
space.m = space[3];
space.l = space[4];
space.xl = space[5];

const text = {
  heading: {
    color: colors.purple,
    h1: {
      fontSize: [7, 8],
      fontWeight: 'bold',
      lineHeight: ['40px', '58px'],
      letterSpacing: ['-0.6', '-1px']
    },
    h2: {
      fontSize: [6, 7],
      fontWeight: 'regular',
      lineHeight: ['40px', '48px'],
      letterSpacing: ['-0.5px', '-1.5px']
    },
    h3: {
      fontSize: 5,
      fontWeight: 'regular',
      lineHeight: '32px',
      letterSpacing: '-1px'
    },
    h4: {
      fontSize: 4,
      fontWeight: 'medium',
      lineHeight: '28px',
      letterSpacing: '-0.75px'
    },
    h5: {
      fontSize: 2,
      fontWeight: 'semiBold',
      lineHeight: '24px',
      letterSpacing: '-0.5px'
    },
    h6: {
      fontSize: 0,
      fontWeight: 'regular',
      lineHeight: '20px',
      letterSpacing: '-0.5px'
    }
  },
  paragraph: {
    s: {
      color: colors.neon,
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'regular',
      lineHeight: '26px',
      letterSpacing: 0
    },
    m: {
      color: colors.neon,
      fontFamily: 'body',
      fontSize: 3,
      fontWeight: 'regular',
      lineHeight: '28px',
      letterSpacing: 0
    },
    l: {
      color: colors.neon,
      fontFamily: 'body',
      fontSize: 4,
      fontWeight: 'medium',
      lineHeight: '50px',
      letterSpacing: 0
    }
  }
};

const styles = {
  root: {}
};
export const globalStyles = `

`;

const theme = {
  breakpoints,
  buttons,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  layout,
  space,
  styles,
  text
};

export default theme;
