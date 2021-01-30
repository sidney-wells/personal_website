import { Link as StyledLink } from 'theme-ui';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

export const Link = ({ href, size, children }) => {
  const link = {
    fontFamily: 'Nunito Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: 'gray',
      textDecoration: 'underline'
    }
  };
  const linkSize =
    size === 'small'
      ? { fontSize: '12px' }
      : size === 'medium'
      ? { fontSize: '16px' }
      : size === 'large'
      ? { fontSize: '20px' }
      : '';

  const styles = { ...link, ...linkSize };

  return (
    <NextLink href={href} prefetch={false} passHref>
      <StyledLink sx={styles}>{children}</StyledLink>
    </NextLink>
  );
};

Link.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  href: PropTypes.string,
  children: PropTypes.node
};

Link.defaultProps = {
  size: 'medium',
  href: ''
};
