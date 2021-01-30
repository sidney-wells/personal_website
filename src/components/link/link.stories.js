import { Link } from '.';

const story = {
  title: 'Atoms/Links',
  component: Link
};

export default story;

const Template = args => <Link {...args} />;

export const SmallLink = Template.bind({});
SmallLink.args = {
  href: '/',
  size: 'small',
  children: 'This is a small link'
};
SmallLink.parameters = {
  backgrounds: { default: 'dark' }
};

export const MediumLink = Template.bind({});
MediumLink.args = {
  href: '/',
  size: 'medium',
  children: 'This is a medium link'
};
MediumLink.parameters = {
  backgrounds: { default: 'dark' }
};

export const LargeLink = Template.bind({});
LargeLink.args = {
  href: '/',
  size: 'large',
  children: 'This is a large link'
};
LargeLink.parameters = {
  backgrounds: { default: 'dark' }
};
