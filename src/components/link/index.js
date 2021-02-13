import { Link as StyledLink } from 'theme-ui';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

const Link = ({ href, size, children, ...props }) => {
  const link = {
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
    color: 'neon',
    '&:hover': {
      color: 'purple'
    }
  };
  const linkSize =
    size === 'l'
      ? { fontSize: '24px' }
      : size === 'm'
      ? { fontSize: '16px' }
      : { fontSize: '13px' };

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
