import React from 'react';
import { storiesOf } from '@storybook/react';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import { withKnobs } from '@storybook/addon-knobs';

import CpsAsset from '.';
import japanese from '#data/japanese/cpsAssets/video-23248670';

const cpsAssetFixtures = {
  japanese,
};

const matchFixtures = service => ({
  params: {
    assetUri: {
      japanese: 'japanese/video-23248670',
    }[service],
  },
});

storiesOf('Pages|CPS Asset Page', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider({
      // eslint-disable-next-line react/prop-types
      componentFunction: ({ service }) => (
        <CpsAsset
          match={matchFixtures(service)}
          data={{
            pageData: cpsAssetFixtures[service],
            status: 200,
          }}
          service={service}
          isAmp={false}
          loading={false}
          error=""
          pageType="MAP"
        />
      ),
      service: Object.keys(cpsAssetFixtures),
      options: { defaultService: 'japanese' },
    }),
  );
