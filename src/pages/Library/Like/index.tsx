import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
} from "@ionic/react";
import React from "react";
import TrackPreview from "../../../components/TrackPreview";
import Models from "../../../types/models";
import "./index.css";

const Track: React.FC = () => {
  const tracks: Models.Track[] = React.useMemo(() => {
    return [
      {
        title: "5G",
        image: "/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg",
        artist_name: "Booba",
        artist_id: 1,
      },
      {
        title: "4G",
        image: "/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg",
        artist_name: "Booba",
        artist_id: 1,
      },
      {
        title: "4G",
        image: "/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg",
        artist_name: "Booba",
        artist_id: 1,
      },
      {
        title: "4G",
        image: "/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg",
        artist_name: "Booba",
        artist_id: 1,
      },
    ];
  }, []);

  return (
    <IonPage className="Track">
      <IonHeader>
        <IonButton className="Playlist__lecture">Lecture</IonButton>
      </IonHeader>
      <IonContent fullscreen>
        <div className="Playlist__tracksList ion-text-center">
          {tracks.map((track) => (
            <TrackPreview trackPreview={track} />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Track;
