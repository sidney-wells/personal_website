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
  children: 'This is a 13px text'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'm',
  children: 'This is a 16px text'
};

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  children: 'This is a 20px text'
};

export const extraLarge = Template.bind({});
extraLarge.args = {
  size: 'xl',
  children: 'This is a 24px text'
};
