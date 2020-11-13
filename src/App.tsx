import React from 'react';
import { IonApp, IonRouterOutlet, setupConfig } from '@ionic/react';
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
import AppContext from  './contexts/AppContext'
import { Route } from 'react-router';
import MainLayout from './pages/MainLayout';
import SpotifyProvider from './components/SpotifyProvider';
import Models from './types/models';
import useSpotify from './hooks/useSpotify';

const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID || '';
const spotifyRedirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI || ''

setupConfig({
  rippleEffect: false,
  tabButtonLayout: 'label-hide'
});

const App: React.FC = () => {
  
  const { fetchSpotify } = useSpotify()
  const [themes, setThemes] = React.useState<Models.Theme[]>([]);
  const [showPlayer, setShowPlayer] = React.useState(false);

  fetchSpotify('https://cameleon.romaricgauzi.com/themes', (data) => {
    setThemes(
      data.themes.map((theme: any) => {
        return {
          title: theme.title,
          //https://cameleon.romaricgauzi.com/${theme.image}
          image: `https://cameleon.romaricgauzi.com${theme.image}`,
          uri: theme.uri
        }
      })
    )
  })

  return (
    <IonApp>
      <AppContext.Provider value={{
          themes,
          showPlayer: showPlayer,
          setShowPlayer: setShowPlayer
        }}>
        <SpotifyProvider
          clientId={spotifyClientId}
          redirectUri={spotifyRedirectUri}
        >
          <IonReactRouter>
            <IonRouterOutlet>
              <Route path="/" component={MainLayout} />
              {/* <Route path="/auth" component={Auth} /> */}
            </IonRouterOutlet>
          </IonReactRouter>
        </SpotifyProvider>
      </AppContext.Provider>
    </IonApp>
  );
}

export default (App);
