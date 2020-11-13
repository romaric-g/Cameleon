import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonButtons,
  IonButton,
  IonIcon,
  IonBackButton,
} from "@ionic/react";
import React from "react";
import SmallMoodCard from "../../components/SmallMoodCard";
import TrackPreview from "../../components/TrackPreview";
import Models from "../../types/models";
import "./index.scss";
import { caretBackOutline} from "ionicons/icons";
import useSpotify from "../../hooks/useSpotify";
import { useParams } from "react-router";

const Artiste: React.FC = () => {

  const { id } = useParams() as any;
  const { fetchSpotify } = useSpotify();

  const [ artiste, setArtist ] = React.useState<Models.Artist>();

  fetchSpotify('https://api.spotify.com/v1/artists/' + id, (data) => {
    console.log(data)
    setArtist({
      id: 1,
      name: data.name,
      image: data.images[0].url,
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
    })
  })

  if (!artiste) {
    return null;
  }

  return (
    <IonPage className="Artiste">
      <IonHeader>
        <IonButtons className="Artiste__back">
          <IonButton>
            <IonBackButton />
          </IonButton>
        </IonButtons>
        <div className="Artiste__background">
          <img
            className="Artiste__background__image"
            src={artiste.image}
            alt=""
          />
        </div>
        <img
          className="Artiste__cover"
          src={artiste.image}
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
