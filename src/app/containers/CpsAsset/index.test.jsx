import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import CpsAsset from '.';
import japanesePageData from '#data/japanese/cpsAssets/video-23248670';

const cpsAssetScaffoldProps = {
  isAmp: false,
  pageType: 'MAP',
  service: 'japanese',
  pathname: '/pathname',
  match: {
    params: {
      pageData: japanesePageData,
    },
  },
  data: { status: 200 },
};

jest.mock('../PageHandlers/withPageWrapper', () => Component => {
  const PageWrapperContainer = props => (
    <div id="PageWrapperContainer">
      <Component {...props} />
    </div>
  );

  return PageWrapperContainer;
});

jest.mock('../PageHandlers/withLoading', () => Component => {
  const LoadingContainer = props => (
    <div id="LoadingContainer">
      <Component {...props} />
    </div>
  );

  return LoadingContainer;
});

jest.mock('../PageHandlers/withError', () => Component => {
  const ErrorContainer = props => (
    <div id="ErrorContainer">
      <Component {...props} />
    </div>
  );

  return ErrorContainer;
});

jest.mock('../PageHandlers/withData', () => Component => {
  const DataContainer = props => (
    <div id="DataContainer">
      <Component {...props} />
    </div>
  );

  return DataContainer;
});

jest.mock('../CpsAssetMain', () => {
  const CpsAssetMain = () => <div>CpsAssetMain</div>;

  return CpsAssetMain;
});

describe('CPS Asset Page', () => {
  describe('snapshots', () => {
    shouldMatchSnapshot(
      'should match scaffold snapshot',
      <CpsAsset {...cpsAssetScaffoldProps} />,
    );
  });
});
