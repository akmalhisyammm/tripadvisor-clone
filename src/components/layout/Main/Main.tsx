import React, { ReactNode } from 'react';
import { IonGrid } from '@ionic/react';
import { Searchbar } from 'components/searchSections';

import styles from './Main.module.scss';

interface MainProps {
  title: 'Explore' | 'Search' | 'Plan' | 'Review';
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ title, children }) => (
  <main className={styles.main}>
    {title === 'Search' && <Searchbar />}
    <IonGrid>{children}</IonGrid>
  </main>
);

export default Main;
