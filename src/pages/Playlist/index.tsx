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
import React from "react";
import TrackPreview from "../../components/TrackPreview";
import Models from "../../types/models";
import "./index.scss";
import Context from "../../components/SpotifyProvider/Context";
import { useHistory, useParams } from "react-router";

const Playlist: React.FC = () => {

  const { id } = useParams() as any;
  const history = useHistory();

  const [playlist, setPlaylist] = React.useState<Models.Playlist | null>(null)
  const { spotifyApi, deviceId } = React.useContext(Context) as any;

  React.useEffect(() => {
    
      spotifyApi.getPlaylist(id)
        .then((data: any) => {
          setPlaylist({
            title: data.name,
            image: data.images[0].url,
            titleAmount: data.tracks.total,
            id: data.id,
            uri: data.uri,
            tracks: data.tracks.items.map((item: any) => {
              const track = item.track;
              return {
                title: track.name,
                image: track.album.images[2].url,
                artist_name: track.artists.map((artist: any) => artist.name).join(', '),
                artist_id: track.artists[0].id
              }
            }),
          })
        }, () => {
          history.push('/')
        });

  
  }, [spotifyApi, id, history])
  
  const playTrack = React.useCallback((position: number = 0) => {
      const data = {
        "device_id": deviceId,
        "context_uri": playlist?.uri,
        "offset": { position: position }
      }
      spotifyApi.play(data)
  }, [deviceId, playlist, spotifyApi])

  if(!playlist) return null;

  return (
    <IonPage className="Playlist">
      <IonHeader>
        <IonToolbar className="Playlist__toolbar">
          <IonButtons className="Playlist__back" slot="start">
            <IonButton>
              <IonBackButton defaultHref="/library"/>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="Playlist__infos">
          <div className="Playlist__infos__content">
            <IonText className="Playlist__infos__content__name">{playlist.title}</IonText>
            <IonText className="Playlist__infos__content__titles">{playlist.titleAmount} titre{playlist.titleAmount > 1 && "s"}</IonText>
            <IonButton className="Playlist__infos__content__lecture" onClick={() => playTrack()}>Lecture</IonButton>
          </div>
          <div className="Playlist__infos__background">
            <img
                className="Playlist__infos__background__image"
                src={playlist.image}
                alt=""
            />
          </div>
        </div>
        <div className="Playlist__tracksList ion-text-center">
          {playlist.tracks?.map((track, index) => (
            <TrackPreview trackPreview={track} onClick={() => playTrack(index)} key={index} />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Playlist;
