import GlobalHeader from '.';

const story = {
  title: 'Molecules/Global Header',
  component: GlobalHeader
};

export default story;

const Template = args => <GlobalHeader {...args} />;

export const Default = Template.bind({});
