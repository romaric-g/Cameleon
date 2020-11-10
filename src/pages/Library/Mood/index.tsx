import { IonPage } from '@ionic/react';
import React from 'react';
import PlaylistPreview from '../../../components/PlaylistPreview';
import Models from '../../../types/models';
import './index.css';

const Mood: React.FC = () => {

    const playlists: Models.PlaylistPreview[] = React.useMemo(() => {
        return [
            {
                title: "triste",
                image: "/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg",
                titleAmount: 85,
            },
            {
                title: "rêveur",
                image: "/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg",
                titleAmount: 2,
            },
            {
                title: "energique",
                image: "/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg",
                titleAmount: 14,
            },
            {
                title: "cool",
                image: "/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg",
                titleAmount: 15,
            }
        ]
        }, []);

    return (
        <IonPage className="Mood">
            <PlaylistPreview playlistPreview={playlists[0]}/>
        </IonPage>
    );
};

export default Mood;
