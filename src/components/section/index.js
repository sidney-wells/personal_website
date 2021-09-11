import { Container as BaseContainer } from 'theme-ui';
import Grid from '../grid';

const Section = ({ children, ...props }) => (
  <BaseContainer variant="layout.container" {...props}>
    <Grid>{children}</Grid>
  </BaseContainer>
);

export default Section;

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
