import GlobalHeader from '.';

const story = {
  title: 'Molecules/Global Header',
  component: GlobalHeader
};

export default story;

const Template = args => <GlobalHeader {...args} />;

export const OpenMenu = Template.bind({});
OpenMenu.args = {
  isOpen: true
};

export const ClosedMenu = Template.bind({});
ClosedMenu.args = {
  isOpen: false
};
