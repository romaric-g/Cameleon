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
import { ellipsisVertical } from "ionicons/icons";

interface TrackPreviewProps {
  trackPreview: Models.Track;
}

const TrackPreview: React.FC<TrackPreviewProps> = ({trackPreview}) => {
 

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
            <IonIcon icon={ellipsisVertical} />
        </IonButton>
      </IonButtons>
    </IonItem>
  );
};

export default TrackPreview;
