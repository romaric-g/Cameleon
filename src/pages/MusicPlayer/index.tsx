import { IonBackButton, IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Models from '../../types/models';
import './index.css';

interface MusicPlayerProps {

}

const MusicPlayer: React.FC<MusicPlayerProps> = (props) => {

  return (
    <IonPage className="ThemeList">
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton />
            </IonButtons>
            <IonTitle>Music Player</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      </IonContent>
    </IonPage>
  );
};

export default MusicPlayer;
