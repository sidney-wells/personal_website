import Grid from '../grid';
import Box from '.';

const story = {
  title: 'Atoms/Box',
  component: Box
};

export default story;

const Template = args => (
  <Grid>
    <Box bg="Teal" {...args}>
      CONTENT
    </Box>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  start: 3,
  span: 10,
  end: 0
};
