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
import SmallMoodCard from "../../components/SmallMoodCard";
import TrackPreview from "../../components/TrackPreview";
import Models from "../../types/models";
import "./index.scss";
import { chevronBackCircleOutline} from "ionicons/icons";

const Artiste: React.FC = () => {
  const artiste: Models.Artist = React.useMemo(() => {
    return {
      id: 1,
      name: "Booba",
      image: "./",
      moods: [
        {
          name: "Calme",
          image: "/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg",
        },
        {
          name: "Triste",
          image: "/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg",
        },
      ],
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
      ],
    };
  }, []);

  return (
    <IonPage className="Artiste">
      <IonHeader>
        <IonButtons>
          <IonButton>
            <IonIcon className="Artiste__back" icon={chevronBackCircleOutline} />
          </IonButton>
        </IonButtons>
        <div className="Artiste__background">
          <img
            className="Artiste__background__image"
            src="/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg"
            alt=""
          />
        </div>
        <img
          className="Artiste__cover"
          src="/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg"
          alt=""
        />
        <IonText>{artiste.name}</IonText>
      </IonHeader>
      <IonContent fullscreen>
        <div className="Artiste__moods ion-text-center">
          <IonText>Moods associés</IonText>
          <div className="Artiste__moods__moodList">
            {artiste.moods?.map((mood) => (
              <SmallMoodCard mood={mood} />
            ))}
          </div>
        </div>
        <div className="Artiste__tracksList ion-text-center">
          <IonText>Titres</IonText>
          {artiste.tracks?.map((track) => (
            <TrackPreview trackPreview={track} />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Artiste;
