import onClient from '../../../lib/utilities/onClient';
import getBaseUrl from '../utils/getBaseUrl';
import fetchData from '../utils/fetchData';
import { variantSanitiser } from '../../../lib/utilities/variantHandler';
import applyTimestampRules from '../../../lib/utilities/preprocessor/rules/timestamp';
import addIdsToBlocks from '../../../lib/utilities/preprocessor/rules/addIdsToBlocks';
import applyBlockPositioning from '../../../lib/utilities/preprocessor/rules/blockPositioning';

const getSearchInitialData = async ({ service, searchTerm }) => {
  const baseUrl = 'XXXX'
  const apiKey = 'XXXX'
  const searchLang = 'es'
  const url = `${baseUrl}?apikey=${apiKey}&category_site=${service}&start=1&q=${searchTerm}&lang=${searchLang}`

  const fetchOptions = {
    headers: {
      'Accept': 'application/vnd.collection+json'
    }
  }

  return fetchData({url, fetchOptions});
};

export default getSearchInitialData;
