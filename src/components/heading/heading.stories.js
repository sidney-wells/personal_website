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
  children: 'This is a h1 heading'
};
Heading1.parameters = {
  backgrounds: { default: 'dark' }
};
export const Heading2 = Template.bind({});
Heading2.args = {
  as: 'h2',
  children: 'This is a h2 heading'
};
export const Heading3 = Template.bind({});
Heading3.args = {
  as: 'h3',
  children: 'This is a h3 heading'
};
export const Heading4 = Template.bind({});
Heading4.args = {
  as: 'h4',
  children: 'This is a h4 heading'
};
export const Heading5 = Template.bind({});
Heading5.args = {
  as: 'h5',
  children: 'This is a h5 heading'
};
export const Heading6 = Template.bind({});
Heading6.args = {
  as: 'h6',
  children: 'This is a h6 heading'
};
Heading6.parameters = {
  backgrounds: { default: 'dark' }
};
