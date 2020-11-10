import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { settings } from 'ionicons/icons';
import React from 'react';
import { useHistory } from 'react-router';
import Slider from '../../components/Slider/';
import Models from '../../types/models';
import './index.css';

const Home: React.FC = () => {

  const history = useHistory();

  const openMoodList = React.useCallback(() => {
    history.push('/themes');
  }, [history])

  const themes: Models.Theme[] = React.useMemo(() => {
    return [
      {
        title: 'chagrin',
        image: '/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg'
      },
      {
        title: 'mélancolique',
        image: '/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg'
      },
      {
        title: 'frénétique',
        image: '/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg'
      },
      {
        title: 'rebelle',
        image: '/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg'
      },
      {
        title: 'sensuel',
        image: '/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg'
      },
      {
        title: 'confiant',
        image: '/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg'
      },
      {
        title: 'joyeux',
        image: '/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg'
      },
      {
        title: 'enthousiaste',
        image: '/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg'
      },
      {
        title: 'concentré',
        image: '/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg'
      },
      {
        title: 'héroïque',
        image: '/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg'
      },
      {
        title: 'rêveur',
        image: '/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg'
      }
    ]
  }, []);

  return (
    <IonPage className="Home">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle className="cameleon-title">Cameleon</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={settings} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Slider themes={themes}/>
        <IonButton onClick={openMoodList} className="all-themes">Tous les moods</IonButton>
        <div className="backimage" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
