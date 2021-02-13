import Box from '.';

const story = {
  title: 'Atoms/Box',
  component: Box
};

export default story;

const Template = args => (
  <div>
    <Box bg="Teal" {...args}>
      CONTENT
    </Box>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  start: 0,
  span: 10,
  end: 0,
  sx: { height: '200px' }
};
