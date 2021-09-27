import React from 'react';
import { IonToolbar, IonSearchbar } from '@ionic/react';

import styles from './Searchbar.module.scss';

const Searchbar: React.FC = () => (
  <IonToolbar className={styles.searchbarToolbar}>
    <IonSearchbar
      color="light"
      placeholder="Where to?"
      className={styles.searchbar}
    />
  </IonToolbar>
);

export default Searchbar;
