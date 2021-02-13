import Layout from '.';
import Section from '../section';

const story = {
  title: 'Atoms/Layout',
  component: Layout
};

export default story;

const Template = args => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Section>hello</Section>
};
