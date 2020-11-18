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

const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID || '';
const spotifyRedirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI || ''

setupConfig({
  rippleEffect: false,
  tabButtonLayout: 'label-hide'
});

const App: React.FC = () => {
  
  // const { fetchSpotify } = useSpotify()
  // const [themes, setThemes] = React.useState<Models.Theme[]>([]);
  const [showPlayer, setShowPlayer] = React.useState(false);

  // fetchSpotify('https://cameleon.romaricgauzi.com/themes', (data) => {
  //   setThemes(
  //     data.themes.map((theme: any) => {
  //       return {
  //         title: theme.title,
  //         //https://cameleon.romaricgauzi.com/${theme.image}
  //         image: `https://cameleon.romaricgauzi.com${theme.image}`,
  //         uri: theme.uri
  //       }
  //     })
  //   )
  // })

  // Suppression du backend pour la demo
  const themes = React.useMemo(() => {
    const ts: Models.Theme[] = [
        {
            title: 'chagrin',
            image: '/assets/themes/chagrin.jpg',
            uri: 'spotify:playlist:7zurhcjV7eTSZAHNI4nDy2'
        },
        {
            title: 'mélancolique',
            image: '/assets/themes/melancolique.jpg',
            uri: 'spotify:playlist:7asLbfYZWODCEK7TLMq9Rs'
        },
        {
            title: 'frénétique',
            image: '/assets/themes/frenetique.jpg',
            uri: 'spotify:playlist:1j6UgzefHSATZWh2coXrBr'
        },
        {
            title: 'rebelle',
            image: '/assets/themes/rebelle.jpg',
            uri: 'spotify:playlist:4x0m2KcuViTgSLpz84r31v'
        },
        {
            title: 'sensuel',
            image: '/assets/themes/sensuel.jpg',
            uri: 'spotify:playlist:7CEn4EJnDWPcjRWPjmra7K'
        },
        {
            title: 'confiant',
            image: '/assets/themes/confiant.jpg',
            uri: 'spotify:playlist:3Fn5IYCKR9jCBibrQAphCc'
        },
        {
            title: 'joyeux',
            image: '/assets/themes/joy.jpg',
            uri: 'spotify:playlist:2cqCMmwcA2cCiH8SdXehSu'
        },
        {
            title: 'enthousiaste',
            image: '/assets/themes/enthousiaste.jpg',
            uri: 'spotify:playlist:7n7KtNxSR15gFArW2VT8sg'
        },
        {
            title: 'concentre',
            image: '/assets/themes/concentre.jpg',
            uri: 'spotify:playlist:5YKvfVoIgUnPTk7EPoQq5e'
        },
        {
            title: 'heroique',
            image: '/assets/themes/heroique.jpg',
            uri: 'spotify:playlist:5eqpqf7YLqDCZdMzuC164E'
        },
        {
            title: 'dreaming',
            image: '/assets/themes/dreaming.jpg',
            uri: 'spotify:playlist:4WKeu79jxHfEcJTT5JqX8q'
        }
    ].map((t) => {
      return {...t, image: window.location.origin + t.image}
    });
    return ts;
  }, [])

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
