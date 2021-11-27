import MenuButtons from '.';

const story = {
  title: 'Atoms/MenuButtons',
  component: MenuButtons
};

export default story;

const Template = args => <MenuButtons {...args} />;

export const ClosedMenu = Template.bind({});
ClosedMenu.args = {
  isOpen: false
};

export const OpenMenu = Template.bind({});
OpenMenu.args = {
  isOpen: true
};
