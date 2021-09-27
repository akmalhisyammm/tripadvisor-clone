import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Explore from 'pages/Explore';
import Search from 'pages/Search';
import Plan from 'pages/Plan';
import Review from 'pages/Review';

import Tabs from 'components/Tabs';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import 'theme/variables.css';
import 'theme/customTheme.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Tabs>
        <IonRouterOutlet>
          <Route exact path="/explore" component={Explore} />
          <Redirect exact from="/" to="/explore" />
          <Route path="/search" component={Search} />
          <Route exact path="/plan" component={Plan} />
          <Route exact path="/review" component={Review} />
        </IonRouterOutlet>
      </Tabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
