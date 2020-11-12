import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Models from '../../types/models';
import './index.css';

interface ThemeListProps {
  themes: Models.Theme[],
  router: HTMLIonRouterOutletElement | null;
}

const ThemeList: React.FC<ThemeListProps> = ({ themes, router }) => {

  return (
    <IonPage className="ThemeList">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle className="cameleon-title">Cameleon</IonTitle>
          <IonTitle>TOUS LES MOODS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="themes">
          <div className="theme">
            <IonButton expand="block">
              <div className="themesensuel">
                <p>Sensuel</p>
              </div>
                <IonImg src="/assets/image/red.jpg" />
            </IonButton>
            </div>
          <div className="theme">
            <IonButton expand="block">
            <div className="themerebelle">
                <p>Rebelle</p>
              </div>
              <IonImg src="/assets/image/CourtneyFireCloseup.jpg" />
            </IonButton>
          </div>
          <div className="theme">
            <IonButton expand="block">
            <div className="themereve">
                <p>Rêveur</p>
              </div>
              <IonImg src="/assets/image/cloudblue.jpg" />
            </IonButton>
          </div>
          <div className="theme">
            <IonButton expand="block">
            <div className="themejoie">
                <p>Joyeux</p>
              </div>
              <IonImg src="/assets/image/yellowballon.jpg" />
            </IonButton>
          </div>
          <div className="theme">
            <IonButton expand="block">
            <div className="thememelan">
                <p>Mélancolie</p>
              </div>
              <IonImg src="/assets/image/darkblue.jpg" />
            </IonButton>
          </div>
          <div className="theme">
            <IonButton expand="block">
            <div className="themefrenesie">
                <p>Frénétique</p>
              </div>
              <IonImg src="/assets/image/\Frénétique.jpg" />
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ThemeList;
