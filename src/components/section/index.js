import PropTypes from 'prop-types';
import { Container as BaseContainer } from 'theme-ui';
import Grid from '../grid';

const Section = ({ variant, children, ...props }) => {
  return (
    <BaseContainer variant={`layout.container.${variant}`} {...props}>
      <Grid>{children}</Grid>
    </BaseContainer>
  );
};

Section.propTypes = {
  variant: PropTypes.string
};
Section.defaultProps = {
  variant: 'default'
};

export default Section;
