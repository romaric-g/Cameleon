import { IonButton, IonButtons, IonContent, IonFooter, IonIcon, IonItem, IonLabel, IonModal, IonProgressBar, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { arrowDown, folderSharp, play, playCircle, playForward, playSkipBack, playSkipForward, repeat, stopwatch, timer } from 'ionicons/icons';
import React from 'react';
import './index.css';

const MusicPlayer: React.FC = () => {

  const [showPlayer, setShowPlayer] = React.useState(false);

  return (
    <>
      <IonItem className="MusicPlayer" onClick={() => setShowPlayer(true)}>
        <IonThumbnail slot="start" >
          <img src="\assets\image\kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg" alt="" />
        </IonThumbnail>
        <IonLabel>Item Thumbnail</IonLabel>
      </IonItem>
      <IonModal isOpen={showPlayer} >
        <div className="backimage">
          <img src="\assets\image\kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg" alt="" />
        </div>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => setShowPlayer(false)}>
              <IonIcon icon={arrowDown} />
            </IonButton>
          </IonButtons>
          <IonTitle>Triste</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowPlayer(false)}>
              <IonIcon icon={folderSharp} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonContent>
          <IonText>TEST</IonText>
        </IonContent>
        <IonFooter>
          <IonProgressBar value={0.5}></IonProgressBar>
          <IonButtons>
            <IonButton><IonIcon icon={stopwatch} /></IonButton>
            <IonButton><IonIcon icon={playSkipBack} /></IonButton>
            <IonButton><IonIcon icon={playCircle} /></IonButton>
            <IonButton><IonIcon icon={playSkipForward} /></IonButton>
            <IonButton><IonIcon icon={repeat} /></IonButton>
          </IonButtons>
        </IonFooter>
      </IonModal>
    </>
  );
};

export default MusicPlayer;
