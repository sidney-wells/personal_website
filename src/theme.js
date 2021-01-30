const breakpoints = ['500px', '1020px', '1600'];

const buttons = {
  lightPrimary: {
    color: 'white',
    bg: 'black',
    fontFamily: 'button',
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: '20px',
    padding: '12px 38px',
    cursor: 'pointer',
    '&:hover, &:focus, &:active': {
      outline: 'none',
    },
    '&:hover': {
      bg: 'neonViolet',
    },
    '&:active': {
      bg: 'neonGreen',
      color: 'black',
    },
    '&:disabled': {
      bg: 'black',
      opacity: '0.2',
    },
  },
  lightSecondary: {
    color: 'black',
    bg: 'white',
    fontFamily: 'button',
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    border: 'solid 1px black',
    borderRadius: '20px',
    padding: '12px 38px',
    cursor: 'pointer',
    '&:hover, &:focus, &:active': {
      outline: 'none',
    },
    '&:hover': {
      borderColor: 'neonViolet',
    },
    '&:active': {
      borderColor: 'neonViolet',
      color: 'neonViolet',
      bg: 'neonGreen',
    },
    '&:disabled': {
      borderColor: 'neonViolet',
      color: 'neonViolet',
      opacity: '0.2',
    },
  },
  darkPrimary: {
    color: 'black',
    bg: 'white',
    fontFamily: 'button',
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: '20px',
    padding: '12px 38px',
    cursor: 'pointer',
    '&:hover, &:focus, &:active': {
      outline: 'none',
    },
    '&:hover': {
      bg: 'neonViolet',
      color: 'white',
    },
    '&:active': {
      bg: 'neonGreen',
      color: 'black',
    },
    '&:disabled': {
      bg: 'neonViolet',
      color: 'white',
      opacity: '0.2',
    },
  },
  darkSecondary: {
    color: 'white',
    bg: 'transparent',
    fontFamily: 'button',
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    border: 'solid 1px white',
    borderRadius: '20px',
    padding: '12px 38px',
    cursor: 'pointer',
    '&:hover, &:focus, &:active': {
      outline: 'none',
    },
    '&:hover': {
      borderColor: 'neonViolet',
      color: 'white',
    },
    '&:active': {
      bg: 'neonGreen',
      color: 'black',
    },
    '&:disabled': {
      color: 'neonViolet',
      opacity: '0.2',
    },
  },
};

const colors = { background: '#ffffff' };

const fonts = {
  heading: '"Poppins", sans-serif',
  body: '"IBM Plex Sans", sans-serif',
  input: 'IBM Plex Mono',
  button: '"IBM Plex Sans", sans-serif',
};

const fontSizes = {};
fontSizes.size = {
  xs: 16,
  s: 18,
  m: 24,
  l: 36,
  xl: 48,
};

const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
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
      fontSize: [7, 8],
      fontWeight: 'bold',
      lineHeight: ['40px', '58px'],
      letterSpacing: ['-0.6', '-1px'],
    },
    h2: {
      fontSize: [6, 7],
      fontWeight: 'regular',
      lineHeight: ['40px', '48px'],
      letterSpacing: ['-0.5px', '-1.5px'],
    },
    h3: {
      fontSize: 5,
      fontWeight: 'regular',
      lineHeight: '32px',
      letterSpacing: '-1px',
    },
    h4: {
      fontSize: 4,
      fontWeight: 'medium',
      lineHeight: '28px',
      letterSpacing: '-0.75px',
    },
    h5: {
      fontSize: 2,
      fontWeight: 'semiBold',
      lineHeight: '24px',
      letterSpacing: '-0.5px',
    },
    h6: {
      fontSize: 0,
      fontWeight: 'regular',
      lineHeight: '20px',
      letterSpacing: '-0.5px',
    },
  },
  paragraph: {
    s: {
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'regular',
      lineHeight: '26px',
      letterSpacing: 0,
    },
    m: {
      fontFamily: 'body',
      fontSize: 3,
      fontWeight: 'regular',
      lineHeight: '28px',
      letterSpacing: 0,
    },
    l: {
      fontFamily: 'body',
      fontSize: 4,
      fontWeight: 'medium',
      lineHeight: '50px',
      letterSpacing: 0,
    },
  },
};

const styles = {
  root: {
    // fontFamily: 'body',
    // lineHeight: 'body',
    // fontWeight: 'body',
    bg: colors.background,
  },
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
  space,
  styles,
  text,
};

export default theme;
