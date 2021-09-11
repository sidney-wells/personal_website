import PropTypes from 'prop-types';

const Diamond = ({ color }) => {
  const obj1 = {
    width: '0',
    height: '0',
    border: '50px solid transparent',
    borderBottom: `70px solid ${color}`,
    position: 'relative',
    top: '-50px'
  };

  const obj2 = {
    content: '',
    position: 'absolute',
    top: '86px',
    width: '0',
    height: '0',
    border: '50px solid transparent',
    borderTop: `70px solid ${color}`
  };

  return (
    <>
      <div style={obj1} />
      <div style={obj2} />
    </>
  );
};

Diamond.propTypes = {
  color: PropTypes.string
};

Diamond.defaultProps = {
  color: 'purple'
};

export default Diamond;
