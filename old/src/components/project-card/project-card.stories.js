import ProjectCard from '.';
import Grid from '../grid';

const story = {
  title: 'Molecules/Project Card',
  component: ProjectCard
};

export default story;

const Template = args => (
  <Grid>
    <ProjectCard {...args} />
  </Grid>
);

export const Default = Template.bind({});
