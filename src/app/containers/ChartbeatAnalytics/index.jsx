import React, { useContext, useEffect } from 'react';
import { ServiceContext } from '../../contexts/ServiceContext';
import { UserContext } from '../../contexts/UserContext';
import { RequestContext } from '../../contexts/RequestContext';
import { pageDataPropType } from '../../models/propTypes/data';
import AmpChartbeatBeacon from './amp';
import { getConfig } from './utils';
import useToggle from '../Toggle/useToggle';

const ChartbeatAnalytics = ({ data }) => {
  const { service, brandName } = useContext(ServiceContext);
  const { sendCanonicalChartbeatBeacon } = useContext(UserContext);
  const { enabled } = useToggle('chartbeatAnalytics');
  const { env, platform, pageType, previousPath, origin } = useContext(
    RequestContext,
  );
  const isAmpAndEnabled = platform === 'amp' && enabled;
  const isCanonicalAndEnabled = platform === 'canonical' && enabled;

  const configDependencies = {
    platform,
    pageType,
    data,
    brandName,
    env,
    service,
    origin,
    previousPath,
  };

  const chartbeatConfig = getConfig(configDependencies);

  useEffect(() => {
    if (isCanonicalAndEnabled) {
      sendCanonicalChartbeatBeacon(chartbeatConfig);
    }
  }, [data, isCanonicalAndEnabled]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    isAmpAndEnabled && <AmpChartbeatBeacon chartbeatConfig={chartbeatConfig} />
  );
};

ChartbeatAnalytics.propTypes = {
  data: pageDataPropType.isRequired,
};

export default ChartbeatAnalytics;
