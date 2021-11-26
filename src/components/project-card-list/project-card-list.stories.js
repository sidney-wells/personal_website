import ProjectCardList from '.';
import Grid from '../grid';

const story = {
  title: 'Molecules/Project Card List',
  component: ProjectCardList
};

export default story;

const Template = args => (
  <Grid>
    <ProjectCardList {...args} />
  </Grid>
);

export const Default = Template.bind({});
