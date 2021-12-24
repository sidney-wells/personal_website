import Heading from '.';

const story = {
  title: 'Atoms/Heading',
  component: Heading
};

export default story;

const Template = args => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  as: 'h1',
  children: 'This is a 72px heading'
};

export const Heading2 = Template.bind({});
Heading2.args = {
  as: 'h2',
  children: 'This is a 56px heading'
};

export const Heading3 = Template.bind({});
Heading3.args = {
  as: 'h3',
  children: 'This is a 48px heading'
};
