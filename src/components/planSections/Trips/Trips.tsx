import React from 'react';
import {
  IonRow,
  IonCol,
  IonItem,
  IonIcon,
  IonLabel,
  IonInput,
  IonButton,
} from '@ionic/react';
import {
  heart,
  locationOutline,
  documentTextOutline,
  personAddOutline,
} from 'ionicons/icons';

import styles from './Trips.module.scss';

const Trips: React.FC = () => (
  <>
    <IonRow>
      <IonCol size="12">
        <IonItem className={styles.item}>
          <IonIcon icon={heart} className={styles.itemIcon} />
          <IonLabel className={styles.itemLabel}>
            Save places you'd like to visit
          </IonLabel>
        </IonItem>
        <IonItem className={styles.item}>
          <IonIcon icon={locationOutline} className={styles.itemIcon} />
          <IonLabel className={styles.itemLabel}>
            See your saves on a map
          </IonLabel>
        </IonItem>
        <IonItem className={styles.item}>
          <IonIcon icon={documentTextOutline} className={styles.itemIcon} />
          <IonLabel className={styles.itemLabel}>
            Keep track of notes, links, and more
          </IonLabel>
        </IonItem>
        <IonItem className={styles.item}>
          <IonIcon icon={personAddOutline} className={styles.itemIcon} />
          <IonLabel className={styles.itemLabel}>
            Share and collaborate on your plans
          </IonLabel>
        </IonItem>
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol size="12">
        <IonLabel className={styles.inputLabel}>Trip name</IonLabel>
        <IonInput
          placeholder="Ex: Weekend in NYC"
          className={styles.inputField}
        />
        <IonButton shape="round" expand="block" color="medium" disabled>
          Create a Trip
        </IonButton>
      </IonCol>
      <IonCol size="12" className="ion-text-center">
        <p className={styles.login}>Log in to access your Trips</p>
      </IonCol>
    </IonRow>
  </>
);

export default Trips;
