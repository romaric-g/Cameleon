import {
  IonButton,
  IonButtons,
  IonIcon,
  IonItem,
  IonText,
  IonThumbnail,
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
    <IonItem lines="none" className="PlaylistPreview">
      <div className="PlaylistPreview__start" slot="start">
        <IonThumbnail>
          <img
            src={playlistPreview.image}
            alt=""
          />
        </IonThumbnail>
        <div className="PlaylistPreview__texts">
          <IonText>{playlistPreview.title}</IonText>
          <IonText>{playlistPreview.titleAmount} titre{playlistPreview.titleAmount > 1 && "s"}</IonText>
        </div>
      </div>
      <IonButtons slot="end">
        <IonButton>
            <IonIcon icon={ellipsisVertical} />
        </IonButton>
      </IonButtons>
    </IonItem>
  );
};

export default PlaylistPreview;
