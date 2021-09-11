import PropTypes from 'prop-types';
import { Card } from 'theme-ui';
import { Image, Text, Link } from '..';

const ProjectCard = ({ projectCard: { link, description } }) => (
  <Card
    sx={{
      borderColor: '2px solid green'
    }}
  >
    <Image size="xl" sx={{ borderRadius: '15px' }} />
    <Link py="xs" href={link.href}>
      {link.title}
    </Link>
    <Text size="s">{description}</Text>
  </Card>
);

ProjectCard.propTypes = {
  projectCard: PropTypes.shape({
    description: PropTypes.string,
    link: PropTypes.shape({
      id: PropTypes.string,
      href: PropTypes.string,
      title: PropTypes.string
    })
  })
};
ProjectCard.defaultProps = {
  projectCard: {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essential",
    link: { id: '1', href: 'https:www.google.com', title: 'Title here' }
  }
};

export default ProjectCard;
