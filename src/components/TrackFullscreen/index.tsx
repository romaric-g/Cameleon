import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonItem,
  IonText,
  IonThumbnail,
  IonTitle,
} from "@ionic/react";
import { addOutline, heartOutline } from "ionicons/icons";
import React from "react";
import Models from "../../types/models";

interface TrackFullscreenProps {
  trackFullscreen: Models.Track;
}

const TrackFullscreen: React.FC<TrackFullscreenProps> = ({trackFullscreen}) => {
 

  return (
    <IonItem>
      <IonContent slot="start">
        <IonThumbnail slot="start">
          <img
            src={trackFullscreen.image}
            alt=""
          />
        </IonThumbnail>
        </IonContent>
        <IonButtons slot="end">
        <IonButton>
            <IonIcon icon={addOutline}>
            </IonIcon>
        </IonButton>
        <IonButton>
            <IonIcon icon={heartOutline}>
            </IonIcon>
        </IonButton>
      </IonButtons>
        <IonContent>
        <div>
          <IonTitle>
              {trackFullscreen.title}
          </IonTitle>
          <IonText>
          {trackFullscreen.artist}
         </IonText>
        </div>
        </IonContent>
    </IonItem>  
  );
};

export default TrackFullscreen;
