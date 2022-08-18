import React from 'react';
import PropTypes from 'prop-types';

import LoadingStub from '../../components/loading-stub/loading-stub';

const withLoadingStub = (Component) => {
  const WithLoadingStubInnerComponent = ({
    isDataLoaded,
    isLightStub,
    ...props
  }) => (
    isDataLoaded ? <Component {...props} /> : <LoadingStub isLightStub={isLightStub} />
  );

  WithLoadingStubInnerComponent.propTypes = {
    isDataLoaded: PropTypes.bool.isRequired,
    isLightStub: PropTypes.bool,
  };

  return WithLoadingStubInnerComponent;
};

export default withLoadingStub;
