import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonText,
  IonThumbnail,
  IonTitle,
} from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";
import React from "react";
import Models from "../../types/models";

interface PlaylistPreviewProps {
  playlistPreview: Models.PlaylistPreview;
}

const PlaylistPreview: React.FC<PlaylistPreviewProps> = ({playlistPreview}) => {
 

  return (
    <IonItem>
      <IonContent slot="start">
        <IonThumbnail slot="start">
          <img
            src={playlistPreview.image}
            alt=""
          />
        </IonThumbnail>
        <div>
          <IonTitle>
              {playlistPreview.title}
          </IonTitle>

          <IonText>
              {playlistPreview.titleAmount} titre{playlistPreview.titleAmount > 1 && "s"}
         </IonText>
        </div>
      </IonContent>
      <IonButtons slot="end">
        <IonButton>
            <IonIcon icon={ellipsisVertical}>

            </IonIcon>
        </IonButton>
      </IonButtons>
    </IonItem>
  );
};

export default PlaylistPreview;
