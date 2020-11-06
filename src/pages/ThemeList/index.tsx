import { IonBackButton, IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Models from '../../types/models';
import './index.css';

interface ThemeListProps {
  themes: Models.Theme[]
}

const ThemeList: React.FC<ThemeListProps> = ({ themes }) => {

  return (
    <IonPage className="ThemeList">
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton />
            </IonButtons>
            <IonTitle>Tous les moods</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="themes">
          <div className="theme">
            <IonButton expand="block">
              <IonImg src="/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg" />
            </IonButton>
          </div>
          <div className="theme">
            <IonButton expand="block">
              <IonImg src="/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg" />
            </IonButton>
          </div>
          <div className="theme">
            <IonButton expand="block">
              <IonImg src="/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg" />
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ThemeList;
