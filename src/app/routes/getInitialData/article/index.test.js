import baseUrl from '../utils/getBaseUrl';
import onClient from '#lib/utilities/onClient';
import fetchData from '../utils/fetchData';

const mockApplyTimestampRules = jest.fn();
const mockAddIdsToBlocks = jest.fn();
const mockApplyBlockPositioning = jest.fn();

jest.mock(
  '#lib/utilities/preprocessor/rules/article/timestamp',
  () => mockApplyTimestampRules,
);

jest.mock(
  '#lib/utilities/preprocessor/rules/article/addIdsToBlocks',
  () => mockAddIdsToBlocks,
);

jest.mock(
  '#lib/utilities/preprocessor/rules/article/blockPositioning',
  () => mockApplyBlockPositioning,
);

const preprocessorRules = [
  mockApplyTimestampRules,
  mockAddIdsToBlocks,
  mockApplyBlockPositioning,
];

process.env.SIMORGH_BASE_URL = 'https://www.SIMORGH_BASE_URL.com';

const getBaseUrlMockOrigin = 'https://www.getBaseUrl.com';
jest.mock('../utils/getBaseUrl', () => jest.fn());
baseUrl.mockImplementation(() => getBaseUrlMockOrigin);

let onClientMockResponse = true;
jest.mock('#lib/utilities/onClient', () => jest.fn());
onClient.mockImplementation(() => onClientMockResponse);

const fetchDataMockResponse = {
  pageData: 'foo',
  status: 123,
};
jest.mock('../utils/fetchData', () => jest.fn());
fetchData.mockImplementation(() => fetchDataMockResponse);

const getArticleInitialData = require('.').default;

const defaultIdParam = 'c0000000001o';
const defaultServiceParam = 'news';
let defaultContext;

describe('getArticleInitialData', () => {
  beforeEach(() => {
    defaultContext = {
      id: defaultIdParam,
      service: defaultServiceParam,
    };

    jest.clearAllMocks();
  });

  it('fetches data and returns expected object', async () => {
    const response = await getArticleInitialData(defaultContext);

    expect(fetchData).toHaveBeenCalledWith({
      url: 'https://www.getBaseUrl.com/news/articles/c0000000001o.json',
      preprocessorRules,
    });

    expect(response).toEqual({
      pageData: 'foo',
      status: 123,
    });
  });

  it('fetches data and returns expected object with variant', async () => {
    await getArticleInitialData({
      ...defaultContext,
      variant: 'variant',
    });

    expect(fetchData).toHaveBeenCalledWith({
      url: 'https://www.getBaseUrl.com/news/articles/c0000000001o/variant.json',
      preprocessorRules,
    });
  });

  it('fetches data and returns expected object with variant with leading slash', async () => {
    await getArticleInitialData({
      ...defaultContext,
      variant: '/variant',
    });

    expect(fetchData).toHaveBeenCalledWith({
      url: 'https://www.getBaseUrl.com/news/articles/c0000000001o/variant.json',
      preprocessorRules,
    });
  });

  describe('When not on client', () => {
    beforeEach(() => {
      onClientMockResponse = false;
    });

    it('fetches data from SIMORGH_BASE_URL enviroment variable origin', async () => {
      const response = await getArticleInitialData(defaultContext);

      expect(fetchData).toHaveBeenCalledWith({
        url: 'https://www.SIMORGH_BASE_URL.com/news/articles/c0000000001o.json',
        preprocessorRules,
      });

      expect(response).toEqual({
        pageData: 'foo',
        status: 123,
      });
    });

    it('fetches data from SIMORGH_BASE_URL enviroment variable origin with variant', async () => {
      await getArticleInitialData({
        ...defaultContext,
        variant: 'variant',
      });

      expect(fetchData).toHaveBeenCalledWith({
        url:
          'https://www.SIMORGH_BASE_URL.com/news/articles/c0000000001o/variant.json',
        preprocessorRules,
      });
    });
  });
});
