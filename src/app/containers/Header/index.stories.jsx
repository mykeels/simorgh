import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, button } from '@storybook/addon-knobs';
import * as scripts from '@bbc/gel-foundations/scripts';
import LANGUAGE_VARIANTS from '@bbc/psammead-storybook-helpers/src/text-variants';
import { Helmet } from 'react-helmet';
import { arrayOf, shape, string, element } from 'prop-types';
import HeaderContainer from '.';
import { RequestContextProvider } from '#contexts/RequestContext';
import services from '#testHelpers/serviceConfigs';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import { ToggleContextProvider } from '#contexts/ToggleContext';

const inputProvider = ({
  slots,
  componentFunction,
  services: serviceList,
  options = {},
}) => () => {
  let serviceNames = Object.keys(LANGUAGE_VARIANTS);

  if (serviceList) {
    serviceNames = serviceNames.filter(service =>
      serviceList.includes(service),
    );
  }

  const serviceName = select(
    'Select a service',
    serviceNames,
    options.defaultService || 'news',
  );

  button('Re-render', () => {
    return true;
  });

  const service = LANGUAGE_VARIANTS[serviceName];
  const isNews = serviceName === 'news';

  const slotTexts = (slots || []).map(({ defaultText }) => {
    // Expect defaultText to be in English. When it is provided and we're
    // displaying English language on the story, set the default text for
    // this knob to defaultText.
    // When we switch to a language other than English, set the
    // text for the slot to the snippet from LANGUAGE_VARIANTS for that
    // language.
    return defaultText && isNews ? defaultText : service.text;
  });

  const script = scripts[service.script];
  const dir = service.dir || 'ltr';
  const { locale } = service;

  return (
    <>
      <Helmet htmlAttributes={{ dir }} />
      {componentFunction({
        slotTexts,
        script,
        dir,
        locale,
        service: serviceName,
      })}
    </>
  );
};

inputProvider.propTypes = {
  slots: arrayOf(
    shape({
      name: string,
      defaultText: string,
    }),
  ),
  componentFunction: element,
  services: arrayOf(string),
  options: shape({ defaultService: string }),
};

storiesOf('Containers|Header', module)
  .addParameters({ chromatic: { disable: true } })
  .addDecorator(withKnobs)
  .add('mykeels', () => {
    const selectedName = select(
      'Select a name',
      ['mykeels', 'ho-ting'],
      'mykeels',
    );
    return <h1 style={{ border: '1px solid red' }}>{selectedName}</h1>;
  })
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
                pageType="frontPage"
                service={service}
                statusCode={200}
                pathname="/"
                bbcOrigin="https://www.test.bbc.com"
              >
                <HeaderContainer />
              </RequestContextProvider>
            </ServiceContextProvider>
          </ToggleContextProvider>
        );
      },
      services: Object.keys(services),
    }),
    {
      knobs: {
        escapeHTML: false,
      },
    },
  );
