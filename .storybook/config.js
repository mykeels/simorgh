import 'storybook-chromatic';
import React, { Fragment } from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import * as fontFaces from '@bbc/psammead-styles/fonts';
import GlobalStyles from '@bbc/psammead-styles/global-styles';

const theme = create({
  base: 'light',
  brandTitle: 'BBC Simorgh',
  brandUrl: 'https://github.com/bbc/simorgh',
});

addParameters({
  options: {
    panelPosition: 'right',
    sidebarAnimations: true,
    theme,
  },
  a11y: {
    options: {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag21aa'],
      },
      iframes: true,
    },
  },
});

const fontPathMap = [
  { prefix: 'F_REITH', path: '/fonts/Reith/' },
  { prefix: 'F_NASSIM_ARABIC', path: '/fonts/Nassim/Arabic/' },
  { prefix: 'F_NASSIM_PASHTO', path: '/fonts/Nassim/Pashto/' },
  { prefix: 'F_NASSIM_PERSIAN', path: '/fonts/Nassim/Persian/' },
  { prefix: 'F_NASSIM_URDU', path: '/fonts/Nassim/Urdu/' },
  { prefix: 'F_ISKOOLA_POTA_BBC', path: '/fonts/IskoolaPota/' },
  { prefix: 'F_LATHA', path: '/fonts/Latha/' },
  { prefix: 'F_MALLANNA', path: '/fonts/Mallanna/' },
  { prefix: 'F_NOTO_SANS_ETHIOPIC', path: '/fonts/NotoSansEthiopic/' },
  { prefix: 'F_PADAUK', path: '/fonts/Padauk/' },
  { prefix: 'F_SHONAR_BANGLA', path: '/fonts/ShonarBangla/' },
];

console.log({ fontFaces })

const req = require.context('../src/app', true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  addDecorator(story => (
    /* eslint-disable react/jsx-filename-extension */
    <Fragment>
      <GlobalStyles
        fonts={Object.values(fontFaces).map(fontFace => {
          const fontMap =
            fontPathMap.find(map => fontFace.name.includes(map.prefix)) ||
            fontPathMap[0];
          return fontFace(fontMap.path);
        })}
      />
      {story()}
    </Fragment>
    /* eslint-enable react/jsx-filename-extension */
  ));
  addDecorator(withA11y);
}

configure(loadStories, module);
