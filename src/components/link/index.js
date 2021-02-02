import { Link as StyledLink } from 'theme-ui';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

const Link = ({ href, size, children }, ...props) => {
  const link = {
    fontFamily: 'Nunito Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
    color: 'turq',
    '&:hover': {
      color: 'gray',
      textDecoration: 'underline'
    }
  };
  const linkSize =
    size === 's'
      ? { fontSize: '12px' }
      : size === 'm'
      ? { fontSize: '16px' }
      : size === 'l'
      ? { fontSize: '20px' }
      : '';

  const styles = { ...link, ...linkSize };

  return (
    <NextLink href={href} prefetch={false} passHref>
      <StyledLink sx={styles} {...props}>
        {children}
      </StyledLink>
    </NextLink>
  );
};

Link.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']),
  href: PropTypes.string,
  children: PropTypes.node
};

Link.defaultProps = {
  size: 'm',
  href: ''
};

export default Link;
