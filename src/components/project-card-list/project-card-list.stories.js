import ProjectCardList from '.';

const story = {
  title: 'Molecules/Project Card List',
  component: ProjectCardList
};

export default story;

const Template = args => <ProjectCardList {...args} />;

export const Default = Template.bind({});
