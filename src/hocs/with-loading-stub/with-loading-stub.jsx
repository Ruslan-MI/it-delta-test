import React from 'react';

import LoadingStub from '../../components/loading-stub/loading-stub';

const withLoadingStub = (Component) => {
  const withLoadingStubInnerComponent = ({
    isDataLoaded,
  }) => (
    isDataLoaded ? <Component /> : <LoadingStub />
  );

  return withLoadingStubInnerComponent;
};

export default withLoadingStub;
