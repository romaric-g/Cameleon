import {
  IonItem,
  IonText,
  IonThumbnail,
  IonButton,
  IonButtons,
  IonIcon,
} from "@ionic/react";
import React from "react";
import Models from "../../types/models";
import "./index.scss";
import { heart } from "ionicons/icons";

interface TrackPreviewProps {
  trackPreview: Models.Track;
  hideLike?: boolean
}

const TrackPreview: React.FC<TrackPreviewProps> = ({trackPreview, hideLike}) => {
 

  return (
    <IonItem lines="none" className="TrackPreview">
      <div className="TrackPreview__start" slot="start">
        <IonThumbnail slot="start">
          <img
            src={trackPreview.image}
            alt=""
          />
        </IonThumbnail>
        <div className="TrackPreview__texts">
          <IonText>
              {trackPreview.title}
          </IonText>
          <IonText>
          {trackPreview.artist_name}
         </IonText>
        </div>
      </div>
      <IonButtons slot="end">
        <IonButton>
            { !hideLike && <IonIcon icon={heart} /> }
        </IonButton>
      </IonButtons>
    </IonItem>
  );
};

export default TrackPreview;
