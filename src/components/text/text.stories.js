import { Text } from '.';

const story = {
  title: 'Atoms/Text',
  component: Text
};

export default story;

const Template = args => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  primary: true,
  size: 'small',
  label: 'This is a small link'
};
export const Medium = Template.bind({});
Medium.args = {
  primary: true,
  size: 'medium',
  label: 'This is a small link'
};
export const Large = Template.bind({});
Large.args = {
  primary: true,
  size: 'large',
  label: 'This is a small link'
};
export const Secondary = Template.bind({});
Secondary.args = {
  size: 'large',
  label: 'This is a small link'
};
