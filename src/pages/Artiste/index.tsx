import { IonContent, IonHeader, IonPage, IonText } from '@ionic/react';
import React from 'react';
import SmallMoodCard from '../../components/SmallMoodCard';
import TrackPreview from '../../components/TrackPreview';
import Models from '../../types/models';
import "./index.css";

const Artiste: React.FC = () => {

    const artiste: Models.Artist = React.useMemo(() => {
        return {
            id: 1,
            name: "Booba",
            image: "./",
            moods: [
                {
                    name: "Calme",
                    image: "./",
                },
                {
                    name: "Triste",
                    image: "./",
                },
            ],
            tracks: [
                {
                    title: "5G",
                    image: "./",
                    artist_name: "Booba",
                    artist_id: 1,
                }
            ]
        }
    }, []);
    
    return (
        <IonPage>
            <IonHeader>
                <img src={artiste.image} alt="" />
                <IonText>{artiste.name}</IonText>
            </IonHeader>
            <IonContent>
                <div className="Mood">
                    <IonText>Moods associés</IonText>
                    {
                        artiste.moods?.map((mood) => <SmallMoodCard mood={mood} />)
                    }
                </div>
                <div>
                    <IonText>Titres</IonText>
                    {
                        artiste.tracks?.map((track) => <TrackPreview trackPreview={track} />)
                    }
                </div>
            </IonContent>
        </IonPage>    
    )

}

export default Artiste