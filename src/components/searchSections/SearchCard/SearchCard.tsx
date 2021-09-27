import React from 'react';
import {
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonButton,
} from '@ionic/react';

import styles from './SearchCard.module.scss';

interface SearchCardProps {
  title: string;
  buttonText: string;
}

const SearchCard: React.FC<SearchCardProps> = ({ title, buttonText }) => (
  <IonRow className={styles.cardWrapper}>
    <IonCol size="12">
      <IonCard color="success" className={styles.card}>
        <IonCardContent className={styles.cardContent}>
          <IonCardTitle className={styles.cardTitle}>{title}</IonCardTitle>
          <IonButton shape="round" fill="outline" className={styles.cardButton}>
            {buttonText}
          </IonButton>
        </IonCardContent>
      </IonCard>
    </IonCol>
  </IonRow>
);

export default SearchCard;
