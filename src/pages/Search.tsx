import React from 'react';
import Layout from 'components/layout';
import { Tiles, SearchCard } from 'components/searchSections';
import { PLACES } from 'data';

const Search: React.FC = () => (
  <Layout title="Search">
    <SearchCard
      title="See what's good nearby."
      buttonText="Turn on location settings"
    />
    <Tiles title="Destinations travelers love" data={PLACES.featured_three} />
  </Layout>
);

export default Search;
