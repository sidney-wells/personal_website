const breakpoints = ['576px', '1023px'];

const buttons = {
  primary: {
    fontFamily: 'header',
    color: 'black',
    backgroundColor: 'transparent',
    borderColor: '2px solid black',
    fontSize: '20px',
    padding: '10px 20px',
    fontWeight: 'bold',
    '&:hover': {
      color: 'blue'
    }
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
  text: 'rgba(37, 37, 37, .5)',
  black: 'black'
};

const headers = {
  backgroundColor: 'red'
};

const fonts = {
  heading: 'Roboto, Helvetica, sans-serif',
  body: '"Roboto", Helvetica, sans-serif',
  input: '"Roboto", Helvetica, sans-serif',
  button: '"Roboto", Helvetica, sans-serif',
  header: '"Koho", Helvetica, sans-serif'
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
    bg: '#BEBEBE'
  },
  main: {
    border: '2px solid blue',
    alignItems: 'center',
    primary: {
      backgroundColor: '#F5F5F5'
    },
    secondary: {
      backgroundColor: '#FFFFFF'
    }
  },
  container: {
    maxWidth: '1200px',
    border: '2px solid red',
    minHeight: '100vh',
    margin: 'auto'
  },
  footer: {
    backgroundColor: '#BEBEBE'
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
      color: colors.black,
      fontSize: [7, 8],
      fontWeight: 'regular',
      lineHeight: ['40px', '58px'],
      letterSpacing: ['-0.6', '-1px']
    },
    h2: {
      color: colors.black,
      fontSize: [6, 7],
      fontWeight: 'regular',
      lineHeight: ['40px', '48px'],
      letterSpacing: ['-0.5px', '-1.5px']
    },
    h3: {
      color: colors.black,
      fontSize: 5,
      fontWeight: 'regular',
      lineHeight: '32px',
      letterSpacing: '-1px'
    },
    h4: {
      color: colors.black,
      fontSize: 4,
      fontWeight: 'medium',
      lineHeight: '28px',
      letterSpacing: '-0.75px'
    },
    h5: {
      color: colors.black,
      fontSize: 2,
      fontWeight: 'semiBold',
      lineHeight: '24px',
      letterSpacing: '-0.5px'
    },
    h6: {
      color: colors.black,
      fontSize: 0,
      fontWeight: 'regular',
      lineHeight: '20px',
      letterSpacing: '-0.5px'
    }
  },
  paragraph: {
    s: {
      color: colors.black,
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'regular',
      lineHeight: '26px',
      letterSpacing: 0
    },
    m: {
      color: colors.black,
      fontFamily: 'body',
      fontSize: 3,
      fontWeight: 'regular',
      lineHeight: '28px',
      letterSpacing: 0
    },
    l: {
      color: colors.black,
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
  @import url('https://fonts.googleapis.com/css2?family=KoHo:ital,wght@1,700&display=swap');
  body {
    margin: 0px;
  }
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
