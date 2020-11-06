import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet } from '@ionic/react';
import { compass, folderOpen, search } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Home from '../../pages/Home/';
import ThemeList from '../../pages/ThemeList/';

const Tabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route path="/:tab(home)" component={Home} exact={true} />
      <Route path="/home/themes" component={ThemeList} />
      <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/home">
        <IonIcon icon={compass} />
      </IonTabButton>
      <IonTabButton tab="home2" href="/home">
        <IonIcon icon={folderOpen} />
      </IonTabButton>
      <IonTabButton tab="home3" href="/home">
        <IonIcon icon={search} />
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;