import React from 'react';
import { string, number, any } from 'prop-types';
// import { pageDataPropType } from '#models/propTypes/data';
import PageWrapper from '../../../Layouts/defaultPageWrapper';

const WithPageWrapper = Component => {
  const PageWrapperContainer = props => {
    console.log(props);
    return (
      <PageWrapper {...props}>
        <Component {...props} />
      </PageWrapper>
    );
  };
  PageWrapperContainer.propTypes = {
    pageData: any,
    status: number.isRequired,
    bbcOrigin: string,
  };

  PageWrapperContainer.defaultProps = {
    pageData: null,
    bbcOrigin: null,
  };

  return PageWrapperContainer;
};

export default WithPageWrapper;
