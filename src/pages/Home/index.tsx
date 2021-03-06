import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { settings } from 'ionicons/icons';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Slider from '../../components/Slider/';
import AppContext from '../../contexts/AppContext';
import './index.scss';

const Home: React.FC = () => {

  const history = useHistory();

  const [backimage, setBackimage] = React.useState('');

  const openMoodList = React.useCallback(() => {
    history.push('/themes');
  }, [history])
  
  const { themes } = useContext(AppContext);

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
        <Slider themes={themes} key={themes.length} setBackimage={setBackimage} />
        <div className="Home__floatingButton">
          <IonButton onClick={openMoodList} className="Home__floatingButton__button">Tous les moods</IonButton>
        </div>
        <div className="backimage">
          <img src={backimage} key={backimage} alt="" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
