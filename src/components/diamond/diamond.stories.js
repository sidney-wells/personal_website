import Diamond from '.';

const story = {
  title: 'Atoms/Shapes/Diamond',
  component: Diamond
};

export default story;

const Template = args => <Diamond {...args} />;

export const Default = Template.bind({});

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue'
};
export const Red = Template.bind({});
Red.args = {
  color: 'red'
};
export const Green = Template.bind({});
Green.args = {
  color: 'green'
};
