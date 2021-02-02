import Button from '.';

const story = {
  title: 'Atoms/Button',
  component: Button
};

export default story;

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Primary Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'Secondary Button'
};
Secondary.parameters = {
  backgrounds: { default: 'dark' }
};
