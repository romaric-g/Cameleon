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
import './index.css';

interface PlaylistPreviewProps {
  playlistPreview: Models.PlaylistPreview;
}

const PlaylistPreview: React.FC<PlaylistPreviewProps> = ({playlistPreview}) => {
 

  return (
    <IonItem className="PlaylistPreview">
      <div slot="start">
        <IonThumbnail>
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
      </div>
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
