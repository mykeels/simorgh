import React from 'react';
import { string, shape, node } from 'prop-types';
import renderHelmet from '../../../testHelpers/renderHelmet';
import MediaPlayerContainer from '.';
import { RequestContextProvider } from '../../contexts/RequestContext';
import { ToggleContext } from '../../contexts/ToggleContext';
import { validVideoFixture, missingVpidFixture } from './helpers/fixtures';

const defaultToggles = {
  test: {
    mediaPlayer: {
      enabled: true,
    },
  },
  live: {
    mediaPlayer: {
      enabled: false,
    },
  },
};

const mockToggleDispatch = jest.fn();
const ContextWrapper = ({ platform, children, toggleState }) => (
  <RequestContextProvider
    isAmp={platform === 'amp'}
    service="news"
    platform={platform}
    id="foo"
    pageType="article"
  >
    <ToggleContext.Provider
      value={{ toggleState, toggleDispatch: mockToggleDispatch }}
    >
      {children}
    </ToggleContext.Provider>
  </RequestContextProvider>
);

ContextWrapper.propTypes = {
  children: node.isRequired,
  platform: string.isRequired,
  toggleState: shape({}),
};

ContextWrapper.defaultProps = {
  toggleState: defaultToggles,
};

describe('MediaPlayer', () => {
  describe('is called correctly', () => {
    it('Calls the canonical placeholder when platform is canonical', async () => {
      const html = await renderHelmet(
        <ContextWrapper platform="canonical">
          <MediaPlayerContainer blocks={validVideoFixture} />
        </ContextWrapper>,
      );
      expect(html).toMatchSnapshot();
    });

    it('Calls the canonical player when platform is canonical and placeholder is false', async () => {
      const html = await renderHelmet(
        <ContextWrapper platform="canonical">
          <MediaPlayerContainer
            blocks={validVideoFixture}
            placeholder={false}
          />
        </ContextWrapper>,
      );
      expect(html).toMatchSnapshot();
    });

    it('Calls the AMP player when platform is AMP', async () => {
      const html = await renderHelmet(
        <ContextWrapper platform="amp">
          <MediaPlayerContainer blocks={validVideoFixture} />
        </ContextWrapper>,
      );
      expect(html).toMatchSnapshot();
    });
  });

  describe('Fails and returns early when', () => {
    it('there is no versionId', async () => {
      const html = await renderHelmet(
        <ContextWrapper platform="canonical">
          <MediaPlayerContainer blocks={missingVpidFixture} />
        </ContextWrapper>,
      );
      expect(html).toMatchSnapshot();
    });

    const toggleState = {
      test: {
        mediaPlayer: {
          enabled: false,
        },
      },
    };

    it('component is toggled off', async () => {
      const html = await renderHelmet(
        <ContextWrapper platform="canonical" toggleState={toggleState}>
          <MediaPlayerContainer blocks={validVideoFixture} />
        </ContextWrapper>,
      );
      expect(html).toMatchSnapshot();
    });
  });
});
