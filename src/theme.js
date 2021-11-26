const breakpoints = ['576px', '1023px'];

const buttons = {
  primary: {
    fontFamily: 'IBMPlex',
    color: 'black',
    backgroundColor: 'transparent',
    borderColor: '2px solid black',
    fontSize: '20px',
    padding: '10px 20px',
    fontWeight: 'bold',
    '&:hover': {
      bg: 'blue'
    }
  },
  secondary: {
    color: 'black',
    backgroundColor: 'white',
    borderColor: '2px solid black',
    '&:hover': {
      bg: 'blue'
    }
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
  header: '"Roboto", Helvetica, sans-serif',
  IBMPlex: 'IBM Plex Sans Arabic, sans-serif'
};

const fontSizes = [12, 13, 16, 20, 24, 48, 56, 72];

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
    bg: '#0e172d', // previously gray #BEBEBE
    overflow: 'hidden',
    width: '100%' /* Full width */,
    position: 'fixed', // Set the navbar to fixed position
    top: 0, // Position the navbar at the top of the page
    mt: '-5px',
    p: '0px',
    borderBottom: '1px solid #C0C0C0'
  },
  main: {
    border: '2px solid blue',
    primary: {
      backgroundColor: '#0e172d' // previous white-ish #F5F5F5
    },
    secondary: {
      backgroundColor: '#FFFFFF'
    }
  },
  container: {
    maxWidth: '1200px',
    border: '2px solid red',
    primary: {
      minHeight: 'calc(100vh - 60px)'
    },
    margin: 'auto'
  },
  footer: {
    backgroundColor: '#0e172d' // previously gray #BEBEBE
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
      fontSize: [7],
      fontFamily: fonts.IBMPlex,
      lineHeight: ['40px', '58px'],
      letterSpacing: ['-0.6', '-1px']
    },
    h2: {
      fontSize: [6],
      fontFamily: fonts.IBMPlex,
      lineHeight: ['40px', '48px'],
      letterSpacing: ['2px', '2px']
    },
    h3: {
      fontSize: 5,
      fontFamily: fonts.IBMPlex,
      lineHeight: '48px',
      letterSpacing: '3px'
    },
    h4: {
      fontSize: 3,
      fontFamily: fonts.IBMPlex,
      lineHeight: '28px',
      letterSpacing: '2px'
    },
    h5: {
      fontSize: 2,
      fontWeight: 'semiBold',
      fontFamily: fonts.IBMPlex,
      lineHeight: '24px',
      letterSpacing: '2px'
    },
    h6: {
      fontSize: 0,
      fontWeight: 'regular',
      fontFamily: fonts.IBMPlex,
      lineHeight: '20px',
      letterSpacing: '2px'
    }
  },
  paragraph: {
    s: {
      color: 'black',
      fontFamily: 'IBMPlex',
      fontSize: 1,
      fontWeight: 'regular',
      lineHeight: '26px',
      letterSpacing: 0
    },
    m: {
      color: 'black',
      fontFamily: 'IBMPlex',
      fontSize: 3,
      fontWeight: 'regular',
      lineHeight: '28px',
      letterSpacing: 0
    },
    l: {
      color: 'black',
      fontFamily: 'IBMPlex',
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
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100&display=swap');
  html {
    scroll-behavior: smooth;
  }
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
