import { IonButtons, IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './index.css';

const Library: React.FC = () => {

  return (
    <IonPage className="Library">
      <IonToolbar>
        <IonTitle>Bibliothèque</IonTitle>
      </IonToolbar>
      <IonContent fullscreen>
        <IonSegment value="moods" onIonChange={e => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton value="moods">
            <IonLabel>Mes moods</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="liked">
            <IonLabel>Titre likés</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonContent>
    </IonPage>
  );
};

export default Library;
