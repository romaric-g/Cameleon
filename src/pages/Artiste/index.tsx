import { IonContent, IonHeader, IonItem, IonPage, IonText, IonThumbnail, IonTitle } from '@ionic/react';
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
                    image: "/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg",
                },
                {
                    name: "Triste",
                    image: "/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg",
                },
            ],
            tracks: [
                {
                    title: "5G",
                    image: "/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg",
                    artist_name: "Booba",
                    artist_id: 1,
                }
            ]
        }
    }, []);
    
    return (
        <IonPage className="Artiste">
            <IonHeader>
                <img src="/assets/image/kilarov-zaneit-ZRFztIxiy3M-unsplash.jpg" alt="" />
                <IonText>{artiste.name}</IonText>
            </IonHeader>
            <IonContent>
                <div className="Mood ion-text-center" >
                    <IonText >Moods associés</IonText>
                    {
                        artiste.moods.map((mood) => <SmallMoodCard mood={mood} />)
                    }
                </div>
                <div>
                    <IonText>Titres</IonText>
                    {
                        artiste.tracks.map((track) => <TrackPreview trackPreview={track} />)
                    }
                </div>
            </IonContent>
        </IonPage>    
    )

}

export default Artiste