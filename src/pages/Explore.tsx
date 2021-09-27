import React from 'react';
import Layout from 'components/layout';
import { Slides, Hero } from 'components/exploreSections';
import { PLACES } from 'data';

const Explore: React.FC = () => (
  <Layout title="Explore">
    <Hero
      title="Goodbye to crushing heat and crushing crowds"
      description="Why fall is the best time to visit our national parks"
      buttonText="Get the intel"
    />
    <Slides
      title="Small batch stays"
      description="Cool cities, cooler boutique hotels"
      data={PLACES.featured_one}
    />
    <Slides
      title="Plan your next escape"
      description="Family-friendly spots to explore"
      data={PLACES.featured_two}
    />
    <Hero
      title="Explore Las Vegas, fork first"
      description="Our guide to the top celebrity chef restaurants in Vegas"
      buttonText="Check them out"
    />
    <Hero
      title="Pack that weekender bag"
      description="Our guide to last-minute road trips you can do it now"
      buttonText="Read the guide"
    />
    <Hero
      title="From dream trips to Michelin meals"
      description="All the ways we're celebrating Hispanic Heritage Month"
      buttonText="Read the guide"
    />
  </Layout>
);

export default Explore;
