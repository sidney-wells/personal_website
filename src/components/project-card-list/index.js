import PropTypes from 'prop-types';
import { ProjectCard, Grid } from '..';

const ProjectCardList = ({ projectCards, ...props }) => {
  return (
    <Grid columns={[1, 2, 3]} {...props}>
      {projectCards.map((projectCard, index) => (
        <ProjectCard
          key={projectCard.id}
          skill={projectCard}
          {...props}
          data-testid={index}
        />
      ))}
    </Grid>
  );
};

ProjectCardList.propTypes = {
  projectCards: PropTypes.arrayOf(ProjectCard.propTypes.projectCard)
};
ProjectCardList.defaultProps = {
  projectCards: [
    {
      id: '1',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essential",
      link: { href: 'https:www.google.com', title: 'Title here' }
    },
    {
      id: '2',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essential",
      link: { href: 'https:www.google.com', title: 'Title here' }
    },
    {
      id: '3',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essential",
      link: { href: 'https:www.google.com', title: 'Title here' }
    }
  ]
};

export default ProjectCardList;
