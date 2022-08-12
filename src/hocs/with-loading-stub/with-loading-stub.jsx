import React from 'react';
import PropTypes from 'prop-types';

import LoadingStub from '../../components/loading-stub/loading-stub';

const withLoadingStub = (Component) => {
  const WithLoadingStubInnerComponent = ({
    isDataLoaded,
    ...props
  }) => (
    isDataLoaded ? <Component {...props} /> : <LoadingStub {...props} />
  );

  WithLoadingStubInnerComponent.propTypes = {
    isDataLoaded: PropTypes.bool.isRequired,
  };

  return WithLoadingStubInnerComponent;
};

export default withLoadingStub;
