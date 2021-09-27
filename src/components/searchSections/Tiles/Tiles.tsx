import { IonRow, IonCol, IonImg } from '@ionic/react';
import React from 'react';
import { Place } from 'types/interfaces';

import styles from './Tiles.module.scss';

interface TilesProps {
  title: string;
  data: Array<Place>;
}

const Tiles: React.FC<TilesProps> = ({ title, data }) => (
  <IonRow className={styles.tilesSection}>
    <IonCol size="12" className={styles.tilesTitle}>
      <h3>{title}</h3>
    </IonCol>
    <IonCol size="12" className={styles.tilesWrapper}>
      {data.map((place) => (
        <div key={place.id} className={styles.tile}>
          <IonImg
            src={place.image}
            alt={`tile-image-${place.id}`}
            className={styles.tileImage}
          />
          <div className={styles.tileText}>
            <h2>{place.name}</h2>
          </div>
        </div>
      ))}
    </IonCol>
  </IonRow>
);

export default Tiles;
