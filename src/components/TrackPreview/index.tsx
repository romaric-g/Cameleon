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
  hideLike?: boolean,
  onClick?: () => void
}

const TrackPreview: React.FC<TrackPreviewProps> = ({trackPreview, hideLike, onClick}) => {
 
  return (
    <IonItem lines="none" className="TrackPreview" onClick={onClick}>
      <div className="TrackPreview__start">
        <IonThumbnail>
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
