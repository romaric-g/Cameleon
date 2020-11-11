import {
  IonItem,
  IonText,
  IonThumbnail,
} from "@ionic/react";
import React from "react";
import Models from "../../types/models";

interface TrackPreviewProps {
  trackPreview: Models.Track;
}

const TrackPreview: React.FC<TrackPreviewProps> = ({trackPreview}) => {
 

  return (
    <IonItem>
      <div slot="start">
        <IonThumbnail slot="start">
          <img
            src={trackPreview.image}
            alt=""
          />
        </IonThumbnail>
        <div>
          <IonText>
              {trackPreview.title}
          </IonText>
          <IonText>
          {trackPreview.artist_name}
         </IonText>
        </div>
      </div>
    </IonItem>
  );
};

export default TrackPreview;
