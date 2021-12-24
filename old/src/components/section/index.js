import { Container as BaseContainer } from 'theme-ui';
import Grid from '../grid';
import PropTypes from 'prop-types';

const Section = ({ children, type, ...props }) => (
  <BaseContainer variant={`layout.container.${type}`} {...props}>
    <Grid>{children}</Grid>
  </BaseContainer>
);

export default Section;

Section.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
