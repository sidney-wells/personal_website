import InfinitySymbol from '.';

const story = {
  title: 'Shapes/InfinitySymbol',
  component: InfinitySymbol
};

export default story;

const Template = args => <InfinitySymbol {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue'
};
export const Purple = Template.bind({});
Purple.args = {
  color: '#6930c3'
};
export const White = Template.bind({});
White.args = {
  color: 'white'
};
White.parameters = {
  backgrounds: { default: 'dark' }
};
