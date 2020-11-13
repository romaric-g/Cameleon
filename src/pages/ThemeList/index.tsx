import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext } from 'react';
import Context from '../../components/SpotifyProvider/Context';
import ThemeCard from '../../components/ThemeCard';
import AppContext from '../../contexts/AppContext';
import Models from '../../types/models';
import './index.scss';

const ThemeList: React.FC = () => {

  const { themes } = useContext(AppContext);
  
  return (
    <IonPage className="ThemeList">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>TOUS LES MOODS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="themes">
          {themes.map((theme) =>
            <ThemeCard theme={theme} key={theme.image} />
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ThemeList;
