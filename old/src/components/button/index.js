import PropTypes from 'prop-types';
import { Button as BaseButton } from 'theme-ui';

const Button = ({ type, ...props }) => {
  const variant = type === 'primary' ? 'primary' : 'secondary';
  return <BaseButton variant={variant} {...props} />;
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'primary',
  onClick: undefined
};

export default Button;
