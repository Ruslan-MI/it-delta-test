import React from 'react';
import PropTypes from 'prop-types';

const LoadingStub = ({
  isLightStub = false,
}) => (
  <p className={`loading-stub ${isLightStub ? 'loading-stub--light' : ''}`}>Loading...</p>
);

LoadingStub.propTypes = {
  isLightStub: PropTypes.bool,
};

export default LoadingStub;
