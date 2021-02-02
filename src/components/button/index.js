import PropTypes from 'prop-types';
import { Button as BaseButton } from 'theme-ui';

const Button = ({ onClick, type, ...props }) => {
  const variant = type === 'primary' ? 'primary' : 'secondary';
  return <BaseButton onClick={onClick} variant={variant} {...props} />;
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'primary',
  children: 'Primary Button',
  onClick: () => {}
};

export default Button;
