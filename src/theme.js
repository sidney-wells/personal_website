const breakpoints = ['576px', '1023px'];

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
  background: 'white',
  purple: '#6930c3',
  turq: '#64dfdf',
  neon: '#80ffdb',
  text: 'rgba(37, 37, 37, .5)'
};

const headers = {
  backgroundColor: 'red'
};

const fonts = {
  heading: 'Roboto, Helvetica, sans-serif',
  body: '"Roboto", Helvetica, sans-serif',
  input: '"Roboto", Helvetica, sans-serif',
  button: '"Roboto", Helvetica, sans-serif'
};

const fontSizes = [12, 13, 16, 24, 32, 48, 42, 56, 72];

const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700
};

const images = {
  s: {
    width: '30px',
    minWidth: '30px',
    height: '30px',
    minheight: '30px'
  },
  m: {
    width: '50px',
    minWidth: '50px',
    height: '50px',
    minheight: '50px'
  },
  l: {
    width: '100px',
    minWidth: '100px',
    height: '100px',
    minHeight: '100px'
  },
  xl: {
    width: '300px',
    height: '200px',
    minWidth: '300px',
    minHeight: '200px'
  },
  fill: {
    width: '100%',
    height: '100%'
  }
};

const layout = {
  root: {},
  header: {
    bg: 'black',
    height: '120px'
  },
  main: {
    border: '2px solid blue',
    alignItems: 'center',
    boxShadow: 'inset 0px 10px 20px black'
  },
  container: {
    hero: {
      border: '2px solid red',
      maxWidth: '1200px',
      minHeight: '100vh'
    },
    default: {
      border: '2px solid yellow',
      maxWidth: '1200px'
    }
  },
  footer: {
    bg: 'black',
    height: '120px'
  }
};

const space = [5, 15, 25, 50, 80, 150];
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
  images,
  layout,
  space,
  text
};

export default theme;
