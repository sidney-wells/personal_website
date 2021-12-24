const breakpoints = ['576px', '1023px'];

const colors = {
  background: 'white',
  gray: 'rgba(37, 37, 37, .5)',
  lightGray: '#C0C0C0',
  darkGray: '	#616161',
  charcoal: '#333333',
  // don't really use these
  purple: '#6930c3',
  turq: '#64dfdf',
  neon: '#80ffdb'
};

const buttons = {
  primary: {
    fontFamily: 'IBMPlex',
    color: 'charcoal',
    backgroundColor: 'transparent',
    border: `solid 2px ${colors.charcoal}`,
    fontSize: '20px',
    padding: '10px 20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      bg: 'charcoal',
      color: 'white',
      border: '2px solid charcoal'
    }
  },
  secondary: {
    fontFamily: 'IBMPlex',
    color: 'white',
    backgroundColor: 'charcoal',
    border: `solid 2px white`,
    fontSize: '20px',
    padding: '10px 20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: `${colors.charcoal}`,
      bg: 'white',
      border: `solid 2px ${colors.charcoal}`
    }
  },
  menu: {
    color: 'charcoal',
    width: '70px',
    padding: '0px'
  },
  menuOpen: {
    color: 'red',
    width: '70px',
    paddingRight: '0px'
  }
};

const fonts = {
  heading: 'Roboto, Helvetica, sans-serif',
  body: '"Roboto", Helvetica, sans-serif',
  input: '"Roboto", Helvetica, sans-serif',
  button: '"Roboto", Helvetica, sans-serif',
  header: '"Roboto", Helvetica, sans-serif',
  IBMPlex: 'IBM Plex Sans Arabic, sans-serif'
};

const fontSizes = [13, 16, 20, 24, 48, 56, 72];

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
    bg: colors.background, // previously gray #BEBEBE
    // overflow: 'hidden',
    width: '100%' /* Full width */,
    position: 'fixed', // Set the navbar to fixed position
    top: 0, // Position the navbar at the top of the page
    mt: '-5px',
    p: '0px',
    borderBottom: `1px solid ${colors.charcoal}`
  },
  main: {
    border: `2px solid ${colors.purple}`,
    primary: {
      backgroundColor: 'white' // previous white-ish #F5F5F5
    },
    secondary: {
      backgroundColor: 'white'
    }
  },
  container: {
    maxWidth: '1200px',
    border: `2px solid ${colors.turq}`,
    primary: {
      minHeight: 'calc(100vh - 60px)'
    },
    margin: 'auto'
  },
  footer: {
    backgroundColor: `${colors.background}` // previously gray #BEBEBE
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
      fontSize: 6,
      fontFamily: fonts.IBMPlex,
      lineHeight: ['40px', '58px'],
      letterSpacing: ['-0.6', '-1px']
    },
    h2: {
      fontSize: 5,
      fontFamily: fonts.IBMPlex,
      lineHeight: ['40px', '48px'],
      letterSpacing: ['2px', '2px']
    },
    h3: {
      fontSize: 4,
      fontFamily: fonts.IBMPlex,
      lineHeight: '48px',
      letterSpacing: '3px'
    }
  },
  paragraph: {
    s: {
      color: 'black',
      fontFamily: 'IBMPlex',
      fontSize: 0,
      fontWeight: 'regular',
      lineHeight: '26px',
      letterSpacing: 0
    },
    m: {
      color: 'black',
      fontFamily: 'IBMPlex',
      fontSize: 1,
      fontWeight: 'regular',
      lineHeight: '28px',
      letterSpacing: 0
    },
    l: {
      color: 'black',
      fontFamily: 'IBMPlex',
      fontSize: 2,
      fontWeight: 'medium',
      lineHeight: '30px',
      letterSpacing: 0
    },
    xl: {
      color: 'black',
      fontFamily: 'IBMPlex',
      fontSize: 3,
      fontWeight: 'medium',
      lineHeight: '32px',
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
  fonts,
  fontSizes,
  fontWeights,
  images,
  layout,
  space,
  text
};

export default theme;
