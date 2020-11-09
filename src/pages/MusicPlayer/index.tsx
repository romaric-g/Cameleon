import { IonButton, IonButtons, IonContent, IonFooter, IonIcon, IonItem, IonLabel, IonModal, IonProgressBar, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { add, arrowDown, folderSharp, heartOutline, playCircle, playSkipBack, playSkipForward, repeat, stopwatch } from 'ionicons/icons';
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
          <div className="trackInfos" slot="fixed">
            <img src="/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg" alt="" />
            <IonButtons>
              <IonButton color="light"><IonIcon icon={add} /></IonButton>
              <IonButton color="light"><IonIcon icon={heartOutline} /></IonButton>
            </IonButtons>
            <div>
              <IonTitle color="light">Go Solo</IonTitle> 
              <IonText color="light">Tom Rosenthal</IonText> 
            </div>
          </div>
        </IonContent>
        <IonFooter>
          <IonProgressBar value={0.5}></IonProgressBar>
          <IonButtons>
            <IonButton color="light"><IonIcon icon={stopwatch} /></IonButton>
            <IonButton color="light"><IonIcon icon={playSkipBack} /></IonButton>
            <IonButton color="light"><IonIcon icon={playCircle} /></IonButton>
            <IonButton color="light"><IonIcon icon={playSkipForward} /></IonButton>
            <IonButton color="light"><IonIcon icon={repeat} /></IonButton>
          </IonButtons>
        </IonFooter>
      </IonModal>
    </>
  );
};

export default MusicPlayer;
