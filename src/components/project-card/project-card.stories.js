import ProjectCard from '.';

const story = {
  title: 'Molecules/Project Card',
  component: ProjectCard
};

export default story;

const Template = args => <ProjectCard {...args} />;

export const Default = Template.bind({});
