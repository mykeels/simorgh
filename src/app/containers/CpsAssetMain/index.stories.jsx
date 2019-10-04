import React from 'react';
import { storiesOf } from '@storybook/react';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import { withKnobs } from '@storybook/addon-knobs';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import { ToggleContextProvider } from '#contexts/ToggleContext';
import { RequestContextProvider } from '#contexts/RequestContext';

import CpsAssetMain from '.';
import japanese from '#data/japanese/cpsAssets/video-23248670';

const cpsAssetFixtures = {
  japanese,
};

const validServices = Object.keys(cpsAssetFixtures);

const matchFixtures = service => ({
  params: {
    assetUri: {
      japanese: 'japanese/video-23248670',
    }[service],
  },
});

storiesOf('Main|CPS Asset Page', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider({
      // eslint-disable-next-line react/prop-types
      componentFunction: ({ service }) => {
        return (
          <ToggleContextProvider>
            <ServiceContextProvider service={service}>
              <RequestContextProvider
                isAmp={false}
                pageType="MAP"
                origin="https://www.bbc.com"
                service={service}
              >
                <CpsAssetMain
                  pageData={cpsAssetFixtures[service]}
                  match={matchFixtures(service)}
                  service={service}
                />
              </RequestContextProvider>
            </ServiceContextProvider>
          </ToggleContextProvider>
        );
      },
      services: validServices,
      options: { defaultService: 'japanese' },
    }),
  );
