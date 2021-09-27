import React, { ReactNode } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Header } from './Header';
import { Main } from './Main';

interface LayoutProps {
  title: 'Explore' | 'Search' | 'Plan' | 'Review';
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <IonPage>
    <IonContent>
      <Header title={title} />
      <Main title={title} children={children} />
    </IonContent>
  </IonPage>
);

export default Layout;
