import Text from '.';

const story = {
  title: 'Atoms/Text',
  component: Text
};

export default story;

const Template = args => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 's',
  children: 'This is a small text'
};
Small.parameters = {
  backgrounds: { default: 'dark' }
};
export const Medium = Template.bind({});
Medium.args = {
  size: 'm',
  children: 'This is a medium text'
};
Medium.parameters = {
  backgrounds: { default: 'dark' }
};
export const Large = Template.bind({});
Large.args = {
  size: 'l',
  children: 'This is a medium text'
};
Large.parameters = {
  backgrounds: { default: 'dark' }
};
