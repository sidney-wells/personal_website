import Grid from '../grid';
import Flex from '.';

const story = {
  title: 'Atoms/Flex',
  component: Flex
};

export default story;

const Template = args => (
  <Grid>
    <Flex bg="Teal" {...args}>
      CONTENT
    </Flex>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  start: 0,
  span: 10,
  end: 0,
  sx: { height: '50vh' }
};
