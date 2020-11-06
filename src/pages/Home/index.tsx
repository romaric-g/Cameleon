import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { settings } from 'ionicons/icons';
import React from 'react';
import Slider from '../../components/Slider/';
import Models from '../../types/models';
import './index.css';

const Home: React.FC = (props) => {

  const openMoodList = React.useCallback(() => {
    (props as any).history.push('/home/themes');
  }, [])

  const themes: Models.Theme[] = React.useMemo(() => {
    return [
      {
        title: 'triste',
        image: '/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg'
      },
      {
        title: 'happy',
        image: '/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg'
      },
      {
        title: 'dance',
        image: '/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg'
      }
    ]
  }, []);

  return (
    <IonPage className="Home">
      <IonContent fullscreen>
        <IonToolbar>
          <IonTitle size="large" className="cameleon-title">Cameleon</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={settings} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonButton onClick={openMoodList} className="all-themes">Tous les moods</IonButton>
        <Slider themes={themes} />
        <div className="backimage" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
