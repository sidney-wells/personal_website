import { Container as BaseContainer } from 'theme-ui';
import Grid from '../grid';

const Section = ({ children, ...props }) => {
  return (
    <BaseContainer variant={`layout.container`} {...props}>
      <Grid>{children}</Grid>
    </BaseContainer>
  );
};

export default Section;
