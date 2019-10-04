import React from 'react';
import compose from 'ramda/src/compose';
import CpsAssetMain from '../CpsAssetMain';

import withContexts from '../PageHandlers/withContexts';
import withPageWrapper from '../PageHandlers/withPageWrapper';
import withError from '../PageHandlers/withError';
import withLoading from '../PageHandlers/withLoading';
import withData from '../PageHandlers/withData';

const CpsAssetContainer = props => {
  return <CpsAssetMain {...props} />;
};

const EnhancedCpsAssetContainer = compose(
  withContexts,
  withPageWrapper,
  withLoading,
  withError,
  withData,
)(CpsAssetContainer);

export default EnhancedCpsAssetContainer;
