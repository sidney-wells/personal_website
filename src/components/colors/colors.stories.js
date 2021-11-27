import Color from '.';

const story = {
  title: 'Atoms/Colos',
  component: Color
};

export default story;

const Template = args => <Color {...args} />;

export const Charcoal = Template.bind({});
Charcoal.args = {
  color: 'charcoal',
  children: 'This is a charcoal color used for titles'
};

export const DarkGray = Template.bind({});
DarkGray.args = {
  color: 'darkGray',
  children: 'This is a darkGray heading used for headings'
};

export const Gray = Template.bind({});
Gray.args = {
  color: 'gray',
  children: 'This is a gray color used for text'
};

export const LightGray = Template.bind({});
LightGray.args = {
  color: 'lightGray',
  children: 'This is a lightGray color used for subtext'
};
