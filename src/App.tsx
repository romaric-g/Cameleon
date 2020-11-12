import React from 'react';
import { IonApp, IonButton, IonContent, IonFooter, IonIcon, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonText, setupConfig } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import './theme/variables.css';
import { Route } from 'react-router';
import Home from './pages/Home';

import { connect } from 'react-redux'
import SpotifyConnect from './pages/Auth';
import Auth from './pages/Auth';
import MainLayout from './pages/MainLayout';
import { useCookies } from 'react-cookie';

setupConfig({
  rippleEffect: false,
  tabButtonLayout: 'label-hide'
});

const cameleonTokenKey = 'cameleon_token';

const App: React.FC = () => {
  
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" component={MainLayout} />
          <Route path="/auth" component={Auth} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

function mapStateToProps(state: any) {
  return {
    spotifyToken: state.spotifyToken
  };
}

export default (App);
