import { IonButton, IonButtons, IonIcon, IonItem, IonLabel, IonModal, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { arrowDown, folderSharp } from 'ionicons/icons';
import React from 'react';
import './index.css';

const MusicPlayer: React.FC = () => {

  const [showPlayer, setShowPlayer] = React.useState(false);

  return (
    <>
      <IonItem className="MusicPlayer" onClick={() => setShowPlayer(true)}>
        <IonThumbnail slot="start" >
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="" />
        </IonThumbnail>
        <IonLabel>Item Thumbnail</IonLabel>
      </IonItem>
      <IonModal isOpen={showPlayer} >
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
      </IonModal>
    </>
  );
};

export default MusicPlayer;
