import React from 'react';
import { Redirect, Route } from 'react-router';
import { compass, folderOpen, search } from 'ionicons/icons';

import { IonContent, IonFooter, IonIcon, IonPage, IonRouterOutlet, IonTabBar, IonTabButton } from '@ionic/react';
import Home from '../Home';
import Library from '../Library';
import Search from '../Search';
import ThemeList from '../ThemeList';
import MusicPlayer from '../MusicPlayer';
import Artiste from '../Artiste';
import Playlist from '../Playlist';

const MainLayout: React.FC = () => {

    console.log("Main")

    return (
        <IonPage>
            <IonContent>
            <IonRouterOutlet>
                <Route path="/home" component={Home} exact={true} />
                <Route path="/library" component={Library} />
                <Route path="/search" component={Search} />
                <Route path="/themes" component={ThemeList} />
                <Route path="/player" component={MusicPlayer} />
                <Route path='/artist/personal/:id' component={Artiste} />
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
    )
}

export default MainLayout;