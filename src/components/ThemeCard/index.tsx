import { IonButton, IonImg } from '@ionic/react';
import React from 'react';
import AppContext from '../../contexts/AppContext';
import Models from '../../types/models';
import Context from '../SpotifyProvider/Context';
import './index.scss';

interface ThemeCardProps {
    theme: Models.Theme
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme }) => {

    const { spotifyApi, deviceId } = React.useContext(Context) as any;
    const { setShowPlayer } = React.useContext(AppContext) as any;
    
    const playSound = React.useCallback(() => {
        const data = {
          "device_id": deviceId,
          "context_uri": theme.uri
        }
    
        spotifyApi.play(data)
          .then(function() {
            setShowPlayer(true)
          })
    }, [deviceId])

    return (
        <div className="ThemeCard" onClick={playSound}>
            <IonButton expand="block">
                <div className="ThemeCard__content">
                    <p>{ theme.title }</p>
                </div>
                <IonImg src={theme.image} />
            </IonButton>
        </div>
    );
};

export default ThemeCard;
