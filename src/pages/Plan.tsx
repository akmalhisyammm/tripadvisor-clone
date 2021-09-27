import React, { useState } from 'react';
import Layout from 'components/layout';
import {
  Bookings,
  Saves,
  SegmentControl,
  Trips,
} from 'components/planSections';

const Plan: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<
    'trips' | 'saves' | 'bookings'
  >('trips');

  const selectPlanHandler = (value: 'trips' | 'saves' | 'bookings') => {
    setSelectedPlan(value);
  };

  return (
    <Layout title="Plan">
      <SegmentControl
        selectedValue={selectedPlan}
        onSelectValue={selectPlanHandler}
      />
      {selectedPlan === 'trips' && <Trips />}
      {selectedPlan === 'saves' && <Saves />}
      {selectedPlan === 'bookings' && <Bookings />}
    </Layout>
  );
};

export default Plan;
