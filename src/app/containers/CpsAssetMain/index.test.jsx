import React from 'react';
import { latin } from '@bbc/gel-foundations/scripts';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { ServiceContext } from '../../contexts/ServiceContext';
import { RequestContext } from '../../contexts/RequestContext';
import CpsAssetMain from '.';
import amharicPageData from '../../../../data/amharic/bbc_amharic_radio/liveradio';
import addIdsToBlocks from '../../routes/getInitialData/mediapage/addIdsToBlocks';

jest.mock('../Metadata', () => () => <div id="metadata" />);

jest.mock('../CpsAssetBlocks', () => props => <div id="blocks" {...props} />);

const pageData = addIdsToBlocks(amharicPageData);

describe('Cps Asset Main', () => {
  shouldMatchSnapshot(
    'should match snapshot',
    <ServiceContext.Provider value={{ script: latin }}>
      <RequestContext.Provider
        value={{ platform: 'canonical', pageType: 'media' }}
      >
        <CpsAssetMain service="amharic" pageData={pageData} />
      </RequestContext.Provider>
    </ServiceContext.Provider>,
  );
});
