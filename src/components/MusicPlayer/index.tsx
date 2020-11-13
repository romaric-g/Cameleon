import { IonButton, IonButtons, IonContent, IonFooter, IonIcon, IonItem, IonLabel, IonModal, IonProgressBar, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { add, arrowDown, folderSharp, heartOutline, pause, pauseCircle, playCircle, playSkipBack, playSkipForward, repeat, stopwatch } from 'ionicons/icons';
import React from 'react';
import Context from '../SpotifyProvider/Context';
import './index.scss';

const MusicPlayer: React.FC = () => {

  const [showPlayer, setShowPlayer] = React.useState(false);
  const [playerState, setPlayerState] = React.useState<any>(null);
  const [percent, setPercent] = React.useState<any>(0);

  const { player } = React.useContext(Context) as any;

  React.useEffect(() => {
    if(player != null) {
      player.addListener('player_state_changed', (state: any) => { 
        setPlayerState(state)
      });
    }
  }, [player])

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!playerState) {
        return 0;
      }
      const additional = (playerState.paused ? 0 : new Date().getTime()) - playerState.timestamp;
      const newPercent = (playerState.position + additional) / playerState.duration;
      setPercent(newPercent);
    }, 1000);
    return () => clearTimeout(timer);
  })

  const paused = React.useMemo(() => playerState && playerState.paused , [playerState])
  const track = React.useMemo(() => playerState?.track_window?.current_track?.name || '', [playerState]);
  const artist = React.useMemo(() => playerState?.track_window?.current_track?.artists[0].name || '', [playerState]);

  const trackSmImg = React.useMemo(() => playerState?.track_window?.current_track?.album?.images[0].url, [playerState])
  const trackMdImg = React.useMemo(() => playerState?.track_window?.current_track?.album?.images[1].url, [playerState])
  const trackLgImg = React.useMemo(() => playerState?.track_window?.current_track?.album?.images[2].url, [playerState])

  if(!playerState) {
    return <div></div>;
  }

  return (
    <>
      <div className="MusicPlayer">
        <IonItem onClick={() => setShowPlayer(true)}>
          <IonThumbnail slot="start" >
            <img src={trackSmImg} alt="" />
          </IonThumbnail>
          <div>
            <IonLabel className="MusicPlayer__track">{track}</IonLabel>
            <IonLabel className="MusicPlayer__artist">{artist}</IonLabel>
          </div>
          <IonButtons slot="end">
            <IonButton><IonIcon icon={paused ?  playCircle : pause} /></IonButton>
          </IonButtons>
        </IonItem>
        <IonProgressBar value={percent}></IonProgressBar>
      </div>
      <IonModal isOpen={showPlayer} >
        <div className="backimage">
          <img src={trackLgImg} alt="" />
        </div>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => setShowPlayer(false)}>
              <IonIcon icon={arrowDown} />
            </IonButton>
          </IonButtons>
          <IonTitle>Triste</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowPlayer(false)}>
              <IonIcon icon={folderSharp} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonContent>
          <div className="trackInfos" slot="fixed">
            <img src={trackMdImg} alt="" />
            <IonButtons>
              <IonButton color="light"><IonIcon icon={add} /></IonButton>
              <IonButton color="light"><IonIcon icon={heartOutline} /></IonButton>
            </IonButtons>
            <div>
              <IonTitle color="light">{track}</IonTitle> 
              <IonText color="light">{artist}</IonText> 
            </div>
          </div>
        </IonContent>
        <IonFooter>
          <IonProgressBar value={percent}></IonProgressBar>
          <IonButtons>
            <IonButton color="light"><IonIcon icon={stopwatch} /></IonButton>
            <IonButton color="light"><IonIcon icon={playSkipBack} /></IonButton>
            <IonButton color="light"><IonIcon icon={paused ? playCircle : pauseCircle} /></IonButton>
            <IonButton color="light"><IonIcon icon={playSkipForward} /></IonButton>
            <IonButton color="light"><IonIcon icon={repeat} /></IonButton>
          </IonButtons>
        </IonFooter>
      </IonModal>
    </>
  );
};

export default MusicPlayer;
