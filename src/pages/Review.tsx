import React from 'react';
import Layout from 'components/layout';
import { ReviewCard } from 'components/reviewSections';

const Review: React.FC = () => (
  <Layout title="Review">
    <ReviewCard buttonText="Write a review" />
    <ReviewCard buttonText="Upload a photo" />
  </Layout>
);

export default Review;
