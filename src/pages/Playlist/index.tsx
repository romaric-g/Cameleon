import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import React from "react";
import TrackPreview from "../../components/TrackPreview";
import Models from "../../types/models";
import "./index.scss";
import { caretBackOutline} from "ionicons/icons";

const Playlist: React.FC = () => {
  const playlist: Models.Playlist = React.useMemo(() => {
    return {
      title: "Jour de pluie",
      image: "./",
      titleAmount: 272,
      tracks: [
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
        {
          title: "4G",
          image: "/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg",
          artist_name: "Booba",
          artist_id: 1,
        },
      ],
    };
  }, []);

  return (
    <IonPage className="Playlist">
      <div className="Playlist__background">
          <img
            className="Playlist__background__image"
            src="/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg"
            alt=""
          />
          </div>
      <IonHeader>
        <IonButtons className="Playlist__back">
          <IonButton>
            <IonIcon  icon={caretBackOutline} />
          </IonButton>
        </IonButtons>   
        <IonText>{playlist.title}</IonText>
        <div>
        <IonText className="Playlist__titles">{playlist.titleAmount} titre{playlist.titleAmount > 1 && "s"}</IonText>
        </div>
        <IonButton className="Playlist__lecture">
          Lecture
        </IonButton>
      </IonHeader>
      <IonContent fullscreen>
        <div className="Playlist__tracksList ion-text-center">
          {playlist.tracks?.map((track) => (
            <TrackPreview trackPreview={track} />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Playlist;
