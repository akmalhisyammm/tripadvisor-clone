import React from 'react';
import { IonRow, IonCol, IonText } from '@ionic/react';

import styles from './Saves.module.scss';

const Saves: React.FC = () => (
  <>
    <IonRow className="ion-text-center">
      <IonCol size="12">
        <IonText className={styles.info}>No saves yet</IonText>
      </IonCol>
      <IonCol size="12">
        <IonText className={styles.subInfo}>
          Places you save will appear here.
        </IonText>
      </IonCol>
    </IonRow>
    <IonRow className="ion-text-center">
      <IonCol>
        <p className={styles.login}>Log in to access your Saves</p>
      </IonCol>
    </IonRow>
  </>
);

export default Saves;
