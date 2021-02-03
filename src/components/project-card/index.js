import PropTypes from 'prop-types';
import { Image, Text, Link } from '..';
import { Card } from 'theme-ui';

const ProjectCard = ({ description }) => {
  return (
    <Card bg="green" sx={{ width: '300px', height: '200px', margin: 'auto' }}>
      <Image size="fill" />
      <Link href="/">Link to github</Link>
      <Text size="s">{description}</Text>
    </Card>
  );
};

ProjectCard.propTypes = {
  description: PropTypes.string
};
ProjectCard.defaultProps = {
  description: 'Information here'
};

export default ProjectCard;
