import React from 'react';
import {
    Grid,
    GridItemConstrainedLargeWithTopMargin,
  } from '../../lib/styledGrid';

import StoryPromo from '../StoryPromo';

const filterValues = (data, filterString) => {
  let filteredObject;
  data.forEach(item => {
    if (item.name === filterString) {
      filteredObject = item;
    }
  });
  return filteredObject.value;
};

const searchResults = items => {
  return items.map(({ data }) => {
    const imageUri = filterValues(
      data,
      'http://www.bbc.co.uk/search/schemas/image_uri',
    )
      .split('/cpsprodpb')
      .pop();

    console.log(`headline: ${imageUri}`);
    const completeItem = {
      headlines: {
        headline: filterValues(data, 'http://schema.org/headline'),
      },
      locators: {
        assetUri: filterValues(data, 'http://schema.org/url'),
      },
      summary: filterValues(data, 'http://schema.org/description'),
      timestamp: 1556795033000,
      indexImage: {
        path: `/cpsprodpb/${imageUri}`,
        height: 120,
        width: 200,
        altText: 'Image Alt text',
        copyrightHolder: 'Image provider',
      },
    };
    return (
      <StoryPromo item={completeItem} topStory={false} lazyLoadImage={true} />
    );
  });
};

const SearchMainContainer = ({ items }) => {
  return (
    <main role="main">
      <Grid>
        <GridItemConstrainedLargeWithTopMargin>
          {searchResults(items)}
        </GridItemConstrainedLargeWithTopMargin>
      </Grid>
    </main>
  );
};

export default SearchMainContainer;

{
  /* <StoryPromo item={item} topStory={topStory} lazyLoadImage={lazyLoadImage} /> */
}
