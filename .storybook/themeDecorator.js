import { ThemeProvider } from 'theme-ui';
import theme from '../src/theme';
import './storybook.css';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
