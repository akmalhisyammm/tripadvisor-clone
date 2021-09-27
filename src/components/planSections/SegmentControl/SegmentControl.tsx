import React from 'react';
import {
  IonRow,
  IonCol,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from '@ionic/react';

import styles from './SegmentControl.module.scss';

interface SegmentControlProps {
  selectedValue: 'trips' | 'saves' | 'bookings';
  onSelectValue: (value: 'trips' | 'saves' | 'bookings') => void;
}

const SegmentControl: React.FC<SegmentControlProps> = ({
  selectedValue,
  onSelectValue,
}) => {
  const segmentChangeHandler = (event: CustomEvent) => {
    onSelectValue(event.detail.value);
  };

  return (
    <IonRow>
      <IonCol size="12">
        <IonSegment
          value={selectedValue}
          onIonChange={segmentChangeHandler}
          className={styles.segment}
        >
          <IonSegmentButton value="trips" className={styles.segmentButton}>
            <IonLabel>Trips</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="saves" className={styles.segmentButton}>
            <IonLabel>Saves</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="bookings" className={styles.segmentButton}>
            <IonLabel>Bookings</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonCol>
    </IonRow>
  );
};

export default SegmentControl;
