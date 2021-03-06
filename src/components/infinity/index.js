import PropTypes from 'prop-types';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import _JSXStyle from 'styled-jsx/style'; // eslint-disable-line no-unused-vars

const InfinitySymbol = ({ color }) => {
  return (
    <div id="infinity">
      <style jsx>{`
        #infinity {
          position: relative;
          width: 212px;
          height: 100px;
          box-sizing: content-box;
        }
        #infinity:before,
        #infinity:after {
          content: '';
          box-sizing: content-box;
          position: absolute;
          top: 0;
          left: 0;
          width: 60px;
          height: 60px;
          border: 20px solid ${color};
          border-radius: 50px 50px 0 50px;
          transform: rotate(-45deg);
        }
        #infinity:after {
          left: auto;
          right: 0;
          border-radius: 50px 50px 50px 0;
          transform: rotate(45deg);
        }
      `}</style>
    </div>
  );
};

InfinitySymbol.propTypes = {
  color: PropTypes.string
};

export default InfinitySymbol;
