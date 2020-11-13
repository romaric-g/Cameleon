const { useEffect, useState } = require("react")

interface useDeviceProps {
  token: String | undefined | null,
}

const useDevice = ({ token }: useDeviceProps) => {

  const [deviceId, setDeviceId] = useState(null);
  const [player, setPlayer] = useState();

  useEffect(() => {
    (window as any).onSpotifyWebPlaybackSDKReady = () => {
      if (!token) {
        return;
      }

      const player = new (window as any).Spotify.Player({
        name: 'Cameleon',
        getOAuthToken: (cb: any) => { cb(token); }
      });
    
      // Error handling
      player.addListener('initialization_error', (e: any) => { console.error(e.message); });
      player.addListener('authentication_error', (e: any) => { console.error(e.message); });
      player.addListener('account_error', (e: any) => { console.error(e.message); });
      player.addListener('playback_error', (e: any) => { console.error(e.message); });
    
      // Playback status updates
      player.addListener('player_state_changed', (state: any) => { 
          console.log(state);
      });
    
      // Ready
      player.addListener('ready', (event: any) => {
        console.log('Ready with Device ID', event.device_id);
        setDeviceId(event.device_id);
      });
    
      // Not Ready
      player.addListener('not_ready', (event: any) => {
        console.log('Device ID has gone offline', event.device_id);
      });
    
      // Connect to the player!
      player.connect();
      setPlayer(player);
    };
  }, [token])

  return { isDeviceReady: !!deviceId, deviceId, player }
}

export default useDevice
