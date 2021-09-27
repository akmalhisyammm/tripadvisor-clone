import React, { ReactNode } from 'react';
import {
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonTabs,
} from '@ionic/react';
import {
  homeOutline,
  searchOutline,
  heartOutline,
  pencilOutline,
} from 'ionicons/icons';

interface TabsProps {
  children: ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => (
  <IonTabs>
    {children}
    <IonTabBar color="light" slot="bottom">
      <IonTabButton tab="explore" href="/explore">
        <IonIcon icon={homeOutline} />
        <IonLabel>Explore</IonLabel>
      </IonTabButton>
      <IonTabButton tab="search" href="/search">
        <IonIcon icon={searchOutline} />
        <IonLabel>Search</IonLabel>
      </IonTabButton>
      <IonTabButton tab="plan" href="/plan">
        <IonIcon icon={heartOutline} />
        <IonLabel>Plan</IonLabel>
      </IonTabButton>
      <IonTabButton tab="review" href="/review">
        <IonIcon icon={pencilOutline} />
        <IonLabel>Review</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;
