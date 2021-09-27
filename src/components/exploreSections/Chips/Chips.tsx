import React from 'react';
import { IonChip, IonIcon, IonLabel } from '@ionic/react';
import { Menu } from 'types/interfaces';

import styles from './Chips.module.scss';

interface ChipsProps {
  data: Array<Menu>;
}

const Chips: React.FC<ChipsProps> = ({ data }) => (
  <div className={styles.chipWrapper}>
    {data.map((data) => (
      <IonChip color="light" key={data.id} className={styles.chip}>
        <IonIcon color="dark" icon={data.icon} />
        <IonLabel color="dark">{data.label}</IonLabel>
      </IonChip>
    ))}
  </div>
);

export default Chips;
