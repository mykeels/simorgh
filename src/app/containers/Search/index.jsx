import React from 'react';
import compose from 'ramda/src/compose';
import SearchMain from '../SearchMain';

import withContexts from '../PageHandlers/withContexts';
import withPageWrapper from '../PageHandlers/withPageWrapper';
import withData from '../PageHandlers/withData';
// import withError from '../PageHandlers/withError';
// import withLoading from '../PageHandlers/withLoading';

const SearchContainer = ({ pageData }) => (
  <>
    <h2>Search Results</h2>
    <SearchMain items={pageData.collection.items} />
  </>
);

const EnhancedSearchContainer = compose(
  withContexts,
  withPageWrapper,
  withData,
)(SearchContainer);

export default EnhancedSearchContainer;
