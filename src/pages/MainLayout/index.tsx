import React from 'react';
import { Redirect, Route } from 'react-router';
import { compass, folderOpen, search } from 'ionicons/icons';

import { IonContent, IonFooter, IonIcon, IonPage, IonRouterOutlet, IonTabBar, IonTabButton } from '@ionic/react';
import Home from '../Home';
import Library from '../Library';
import Search from '../Search';
import ThemeList from '../ThemeList';
import MusicPlayer from '../../components/MusicPlayer';
import Artiste from '../Artiste';
import Playlist from '../Playlist';
import './index.scss'

const MainLayout: React.FC = () => {
    return (
        <IonPage className="MainLayout">
            <IonContent>
            <IonRouterOutlet>
                <Route path="/home" component={Home} exact={true} />
                <Route path="/library" component={Library} exact />
                <Route path="/search" component={Search} />
                <Route path="/themes" component={ThemeList} />
                <Route path="/player" component={MusicPlayer} />
                <Route path='/artist/:id' component={Artiste} />
                <Route path='/library/:id' component={Playlist} />
                <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
            </IonRouterOutlet>
            </IonContent>
            <IonFooter>
                <div className="MainLayout__floatingPlayer">
                    <MusicPlayer />
                </div>
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