import { createAnimation, IonButton, IonButtons, IonHeader, IonIcon, IonItem, IonLabel, IonModal, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { arrowDown, folderOpen, folderSharp } from 'ionicons/icons';
import React from 'react';
import './index.css';

const MusicPlayer: React.FC = () => {

  const [showPlayer, setShowPlayer] = React.useState(false);

  const enterAnimation = (baseEl: any) => {
    const backdropAnimation = createAnimation()
      .addElement(baseEl.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(baseEl.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' }
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  }

  const leaveAnimation = (baseEl: any) => {
    return enterAnimation(baseEl).direction('reverse');
  }
  
  return (
    <>
      <IonItem className="MusicPlayer" onClick={() => setShowPlayer(true)}>
        <IonThumbnail slot="start" >
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
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
