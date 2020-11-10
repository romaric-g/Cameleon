import { IonContent, IonHeader, IonLabel, IonPage, IonRouterOutlet, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import './index.css';
import Like from './Like';
import Mood from './Mood';

const Library: React.FC = () => {

  return (
    <IonPage className="Library">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bibliothèque</IonTitle>
        </IonToolbar>
        <IonSegment value="moods" onIonChange={e => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton value="moods">
            <IonLabel>Mes moods</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="liked">
            <IonLabel>Titre likés</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent>
        <Mood/>
      </IonContent>
    </IonPage>
  );
};

export default Library;
