import {
  IonButton,
  IonButtons,
  IonIcon,
  IonItem,
  IonText,
  IonThumbnail,
} from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";
import React from "react";
import { useHistory } from "react-router";
import Models from "../../types/models";
import './index.css';

interface PlaylistPreviewProps {
  playlistPreview: Models.Playlist,
  id?: string
}

const PlaylistPreview: React.FC<PlaylistPreviewProps> = ({playlistPreview, id }) => {

  const history = useHistory();

  const openPlaylist = React.useCallback(() => {
    history.push('/library/' + id)
  }, [history, id])

  return (
    <IonItem lines="none" className="PlaylistPreview" onClick={openPlaylist}>
      <div className="PlaylistPreview__start" slot="start">
        <IonThumbnail>
          <img
            src={playlistPreview.image}
            alt=""
          />
        </IonThumbnail>
        <div className="PlaylistPreview__texts">
          <IonText>{playlistPreview.title}</IonText>
          <IonText>{playlistPreview.titleAmount} titre{playlistPreview.titleAmount > 1 && "s"}</IonText>
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

export default PlaylistPreview;
