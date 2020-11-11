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
import { ellipsisVertical } from "ionicons/icons";
import React from "react";
import Models from "../../types/models";

interface TrackPreviewProps {
  trackPreview: Models.Track;
}

const TrackPreview: React.FC<TrackPreviewProps> = ({trackPreview}) => {
 

  return (
    <IonItem>
      <IonContent slot="start">
        <IonThumbnail slot="start">
          <img
            src={trackPreview.image}
            alt=""
          />
        </IonThumbnail>
        <div>
          <IonTitle>
              {trackPreview.title}
          </IonTitle>
          <IonText>
          {trackPreview.artist}
         </IonText>
        </div>
      </IonContent>
    </IonItem>
  );
};

export default TrackPreview;
