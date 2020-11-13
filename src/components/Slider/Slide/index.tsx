import React from 'react';
import { IonSlide } from '@ionic/react';
import Models from '../../../types/models';
import './index.scss';
import Context from '../../SpotifyProvider/Context';
import AppContext from '../../../contexts/AppContext';

interface SlideProps {
    theme: Models.Theme,
}

const Slide: React.FC<SlideProps> = ({ theme }) => {

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
    }, [deviceId, spotifyApi, setShowPlayer, theme])

    return (
        <IonSlide>
            <div className="Slide" onClick={playSound}>
                <div className="Slide__image">
                    <img src={theme.image} key={theme.image} alt="" />
                </div>
                <p className="Slide__text">{theme.title}</p>
            </div>
        </IonSlide>
    );
}

export default Slide;