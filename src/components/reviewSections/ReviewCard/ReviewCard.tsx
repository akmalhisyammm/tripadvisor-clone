import React from 'react';
import {
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonButton,
  IonImg,
} from '@ionic/react';

import styles from './ReviewCard.module.scss';

interface ReviewCardProps {
  buttonText: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ buttonText }) => (
  <IonRow className={styles.cardWrapper}>
    <IonCol size="12">
      <IonCard className={styles.card}>
        <IonImg
          src="https://via.placeholder.com/800"
          alt="card-background"
          className={styles.cardBackground}
        />
        <IonCardContent className={styles.cardContent}>
          <IonButton shape="round" className={styles.cardButton}>
            {buttonText}
          </IonButton>
        </IonCardContent>
      </IonCard>
    </IonCol>
  </IonRow>
);

export default ReviewCard;
