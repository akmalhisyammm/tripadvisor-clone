import React from 'react';
import { IonToolbar, IonTitle, IonImg, IonAvatar } from '@ionic/react';
import { Chips } from 'components/exploreSections';
import { MENUS } from 'data';

import styles from './Header.module.scss';

interface HeaderProps {
  title: 'Explore' | 'Search' | 'Plan' | 'Review';
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <>
    {title === 'Explore' ? (
      <header className={styles.headerWithBackground}>
        <IonToolbar color="transparent" className={styles.headerToolbar}>
          <IonTitle className={styles.title}>{title}</IonTitle>
          <IonAvatar slot="end" className={styles.avatar}>
            <IonImg src="https://i.pravatar.cc/300" alt="avatar" />
          </IonAvatar>
        </IonToolbar>
        <Chips data={MENUS} />
      </header>
    ) : (
      <header>
        <IonToolbar color="transparent" className={styles.headerToolbar}>
          <IonTitle className={styles.title}>{title}</IonTitle>
        </IonToolbar>
      </header>
    )}
  </>
);

export default Header;
