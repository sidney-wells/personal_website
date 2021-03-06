
import { ThemeProvider } from 'theme-ui';
import theme from '../src/theme';
import './storybook.css';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
        <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      method: 'alphabetical'
    }
  }
};
