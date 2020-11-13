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
import TrackPreview from "../../components/TrackPreview";
import Models from "../../types/models";
import "./index.scss";
import { chevronBackCircleOutline} from "ionicons/icons";
import Context from "../../components/SpotifyProvider/Context";
import { useHistory, useParams } from "react-router";

const Playlist: React.FC = () => {

  const { id } = useParams() as any;
  const history = useHistory();

  const [playlist, setPlaylist] = React.useState<Models.Playlist | null>(null)
  const { spotifyApi } = React.useContext(Context) as any;

  React.useEffect(() => {
    
      spotifyApi.getPlaylist(id)
        .then((data: any) => {
          console.log(data)
          setPlaylist({
            title: data.name,
            image: data.images[0].url,
            titleAmount: data.tracks.total,
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
        }, (err: any) => {
          history.push('/')
        });

  
  }, [spotifyApi, id])
  
  if(!playlist) return null;

  return (
    <IonPage className="Playlist">
      <div className="Playlist__background">
        <img
          className="Playlist__background__image"
          src={playlist.image}
          alt=""
        />
      </div>
      <IonHeader>
        <IonButtons>
          <IonButton>
            {/* <IonIcon className="Playlist__back" icon={chevronBackCircleOutline} /> */}
            <IonBackButton />
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
