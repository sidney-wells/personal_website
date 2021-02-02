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
  background: 'rgba(37, 37, 37, .5)',
  purple: '#6930c3',
  turq: '#64dfdf',
  neon: '#80ffdb'
};

const headers = {
  backgroundColor: 'red'
};

const fonts = {
  heading: '"Poppins", sans-serif',
  body: '"IBM Plex Sans", sans-serif',
  input: 'IBM Plex Mono',
  button: '"IBM Plex Sans", sans-serif'
};

const fontSizes = [12, 13, 14, 16, 20, 24, 42, 56, 72];

const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700
};

const layout = {
  root: {},
  header: {
    backgroundColor: 'purple',
    height: '120px'
  },
  main: {
    backgroundColor: 'black'
  },
  container: {},
  footer: {}
};

const space = [5, 15, 25, 50, 80];
space.xs = space[1];
space.s = space[2];
space.m = space[3];
space.l = space[4];
space.xl = space[5];

const text = {
  heading: {
    h1: {
      color: colors.purple,
      fontSize: [7, 8],
      fontWeight: 'bold',
      lineHeight: ['40px', '58px'],
      letterSpacing: ['-0.6', '-1px']
    },
    h2: {
      color: colors.purple,
      fontSize: [6, 7],
      fontWeight: 'regular',
      lineHeight: ['40px', '48px'],
      letterSpacing: ['-0.5px', '-1.5px']
    },
    h3: {
      color: colors.purple,
      fontSize: 5,
      fontWeight: 'regular',
      lineHeight: '32px',
      letterSpacing: '-1px'
    },
    h4: {
      color: colors.purple,
      fontSize: 4,
      fontWeight: 'medium',
      lineHeight: '28px',
      letterSpacing: '-0.75px'
    },
    h5: {
      color: colors.purple,
      fontSize: 2,
      fontWeight: 'semiBold',
      lineHeight: '24px',
      letterSpacing: '-0.5px'
    },
    h6: {
      color: colors.purple,
      fontSize: 0,
      fontWeight: 'regular',
      lineHeight: '20px',
      letterSpacing: '-0.5px'
    }
  },
  paragraph: {
    s: {
      color: colors.turq,
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'regular',
      lineHeight: '26px',
      letterSpacing: 0
    },
    m: {
      color: colors.turq,
      fontFamily: 'body',
      fontSize: 3,
      fontWeight: 'regular',
      lineHeight: '28px',
      letterSpacing: 0
    },
    l: {
      color: colors.turq,
      fontFamily: 'body',
      fontSize: 4,
      fontWeight: 'medium',
      lineHeight: '50px',
      letterSpacing: 0
    }
  }
};

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap');
`;

const theme = {
  breakpoints,
  buttons,
  colors,
  headers,
  fonts,
  fontSizes,
  fontWeights,
  layout,
  space,
  text
};

export default theme;
