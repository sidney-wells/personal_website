import { Heading } from '.';

const story = {
  title: 'Atoms/Heading',
  component: Heading,
};

export default story;

const Template = (args) => <Heading {...args} />;

export const Small = Template.bind({});
Small.args = {
  primary: true,
  size: 'small',
  label: 'This is a small heading',
};
export const Medium = Template.bind({});
Medium.args = {
  primary: true,
  size: 'medium',
  label: 'This is a medium heading',
};
export const Large = Template.bind({});
Large.args = {
  primary: true,
  size: 'large',
  label: 'This is a large heading',
};
export const Secondary = Template.bind({});
Secondary.args = {
  size: 'large',
  label: 'This is a secondary heading',
};
