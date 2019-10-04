import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import { RequestContextProvider } from '#contexts/RequestContext';
import CpsAssetMain from '.';
import japanesePageData from '#data/japanese/cpsAssets/video-23248670';
import addIdsToBlocks from '../../routes/getInitialData/radioPage/addIdsToBlocks'; // fix this in https://github.com/bbc/simorgh/issues/4108

const pageData = addIdsToBlocks(japanesePageData);

describe('CPS Asset Main', () => {
  shouldMatchSnapshot(
    'should match snapshot',
    <ServiceContextProvider service="news">
      <RequestContextProvider
        bbcOrigin="https://www.test.bbc.co.uk"
        isAmp={false}
        pageType="media"
        pathname="/pathname"
        service="news"
        statusCode={200}
      >
        <CpsAssetMain service="amharic" pageData={pageData} />
      </RequestContextProvider>
    </ServiceContextProvider>,
  );
});
