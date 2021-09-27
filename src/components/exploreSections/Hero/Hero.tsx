import React from 'react';
import { IonRow, IonCol, IonImg, IonButton } from '@ionic/react';

import styles from './Hero.module.scss';

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, buttonText }) => (
  <IonRow className={styles.heroSection}>
    <IonCol size="12">
      <IonImg
        src="https://via.placeholder.com/1000"
        alt="hero-background"
        className={styles.heroBackground}
      />
      <div className={styles.heroContent}>
        <h1>{title}</h1>
        <p>{description}</p>
        <IonButton shape="round" color="light">
          {buttonText}
        </IonButton>
      </div>
    </IonCol>
  </IonRow>
);

export default Hero;
