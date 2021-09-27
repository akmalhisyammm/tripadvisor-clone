import React from 'react';
import { IonRow, IonCol } from '@ionic/react';

import styles from './Bookings.module.scss';

const Bookings: React.FC = () => (
  <IonRow className="ion-text-center">
    <IonCol size="12">
      <p className={styles.login}>Log in to access your Bookings</p>
    </IonCol>
  </IonRow>
);

export default Bookings;
