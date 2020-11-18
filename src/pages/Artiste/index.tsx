import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonButtons,
  IonButton,
  IonBackButton,
  IonToolbar,
} from "@ionic/react";
import React, { useContext } from "react";
import SmallMoodCard from "../../components/SmallMoodCard";
import TrackPreview from "../../components/TrackPreview";
import Models from "../../types/models";
import "./index.scss";
import useSpotify from "../../hooks/useSpotify";
import { useParams } from "react-router";
import AppContext from "../../contexts/AppContext";
import Context from "../../components/SpotifyProvider/Context";

const Artiste: React.FC = () => {

  const { id } = useParams() as any;
  const { themes } = useContext(AppContext);
  const { fetchSpotify } = useSpotify();
  const { spotifyApi, deviceId } = React.useContext(Context) as any;
  const { setShowPlayer } = React.useContext(AppContext) as any;
  
  const playSound = React.useCallback((theme: Models.Theme) => {
      const data = {
        "device_id": deviceId,
        "context_uri": theme.uri
      }
  
      spotifyApi.play(data)
        .then(function() {
          setShowPlayer(true)
        })
  }, [deviceId, spotifyApi, setShowPlayer])


  const [ artiste, setArtist ] = React.useState<Models.Artist>();
  const [ tracks, setTracks ] = React.useState<Models.Track[]>([]);

  fetchSpotify('https://api.spotify.com/v1/artists/' + id, (data) => {
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
      ]
    })
  })

  fetchSpotify(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=FR`, (data) => {
    setTracks(data.tracks.map((trackData: any) => {
      return {
        title: trackData.name,
        image: trackData.album.images[0].url,
        artist_name: trackData.artists.map((artist: any) => artist.name).join(', '),
        artist_id: 1,
      }
    }))
  })

  if (!artiste) {
    return null;
  }

  return (
    <IonPage className="Artiste">
      <IonHeader>
        <IonToolbar>
          <IonButtons className="Artiste__back" slot="start">
            <IonButton>
              <IonBackButton />
            </IonButton>
          </IonButtons>
        </IonToolbar> 
      </IonHeader>
      <IonContent fullscreen>
        <div className="Artiste__infos">
          <div className="Artiste__infos__background">
            <img
              className="Artiste__infos__background__image"
              src={artiste.image}
              alt=""
            />
          </div>
          <div className="Artiste__infos__content">
            <img
              className="Artiste__infos__content__cover"
              src={artiste.image}
              alt=""
            />
            <IonText className="Artiste__infos__content__name">{artiste.name}</IonText>
          </div>
        </div>
        <div className="Artiste__moods ion-text-center">
          <IonText>Moods associés</IonText>
          <div className="Artiste__moods__moodList">
            {themes.map((theme) => (
              <SmallMoodCard theme={theme} key={theme.title} onClick={() => playSound(theme)}/>
            ))}
          </div>
        </div>
        <div className="Artiste__tracksList ion-text-center">
          <IonText>Titres</IonText>
          {tracks?.map((track, index) => (
            <TrackPreview trackPreview={track} key={index} />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Artiste;
