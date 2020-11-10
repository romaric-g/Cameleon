import React from 'react';
import { IonApp, IonContent, IonFooter, IonIcon, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, setupConfig } from '@ionic/react';
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
import { Redirect, Route } from 'react-router';
import { compass, folderOpen, search } from 'ionicons/icons';
import Home from './pages/Home';
import ThemeList from './pages/ThemeList';
import MusicPlayer from './pages/MusicPlayer';
import Library from './pages/Library';
import Search from './pages/Search';
import Playlist from './pages/Playlist';

setupConfig({
  rippleEffect: false,
  tabButtonLayout: 'label-hide'
});

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonPage>
          <IonContent>
            <IonRouterOutlet>
              <Route path="/home" component={Home} exact={true} />
              <Route path="/library" component={Library} />
              <Route path="/search" component={Search} />
              <Route path="/themes" component={ThemeList} />
              <Route path="/player" component={MusicPlayer} />
              <Route path='/library/personal/:id' component={Playlist} />
              <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
            </IonRouterOutlet>
          </IonContent>
          <IonFooter>
            <MusicPlayer />
            <IonTabBar>
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={compass} />
              </IonTabButton>
              <IonTabButton tab="library" href="/library">
                <IonIcon icon={folderOpen} />
              </IonTabButton>
              <IonTabButton tab="search" href="/search">
                <IonIcon icon={search} />
              </IonTabButton>
            </IonTabBar>
          </IonFooter>
        </IonPage>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
