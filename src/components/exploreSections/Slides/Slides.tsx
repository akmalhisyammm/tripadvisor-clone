import React from 'react';
import { IonRow, IonCol, IonImg } from '@ionic/react';
import { Place } from 'types/interfaces';

import styles from './Slides.module.scss';

interface SlidesProps {
  title: string;
  description: string;
  data: Array<Place>;
}

const Slides: React.FC<SlidesProps> = ({ title, description, data }) => (
  <IonRow className={styles.slidesSection}>
    <IonCol size="12" className={styles.slidesTitle}>
      <h3>{title}</h3>
      <p>{description}</p>
    </IonCol>
    <IonCol size="12">
      <div className={styles.slidesWrapper}>
        {data.map((place) => (
          <div key={place.id} className={styles.slide}>
            <IonImg
              src={place.image}
              alt={`slide-image-${place.id}`}
              className={styles.slideImage}
            />
            <div className={styles.slideText}>
              <h2>{place.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </IonCol>
  </IonRow>
);

export default Slides;
