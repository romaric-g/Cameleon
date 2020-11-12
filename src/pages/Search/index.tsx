import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Track from '../../components/TrackPreview';
import Artist from '../../components/ArtisteResearch';
import Models from '../../types/models';
import './index.css';

const Search: React.FC = () => {

  const [searchText, setSearchText] = React.useState('');

  const tracks: Models.Track[] = React.useMemo(() => {
    return [
      {
        title: "Go Solo",
        image: "/assets/image/Sensuel_Plan de travail 1.jpg",
        artist_name: "Tom Rosenthal",
        artist_id: 2,
      },
      {
        title: "Hello",
        image: "/assets/image/Sensuel_Plan de travail 1.jpg",
        artist_name: "Adèle",
        artist_id: 4,
      },
      {
        title: "It's Ok",
        image: "/assets/image/Sensuel_Plan de travail 1.jpg",
        artist_name: "Tom Rosenthal",
        artist_id: 2,
      },
      {
        title: "Monarque",
        image: "/assets/image/Sensuel_Plan de travail 1.jpg",
        artist_name: "Moody",
        artist_id: 3,
      }
    ]
  }, []);

  const artists: Models.Artist[] = React.useMemo(() => {
    return [
      {
        id: 2,
        name: "Tom Rosenthal",
        image: "/assets/image/Sensuel_Plan de travail 1.jpg",
      },
      {
        id: 3,
        name: "Moody",
        image: "/assets/image/Sensuel_Plan de travail 1.jpg",
      },
      {
        id: 4,
        name: "Adèle",
        image: "/assets/image/Sensuel_Plan de travail 1.jpg",
      },
    ]
  }, []);

  return (
    <IonPage className="Search">
      <IonHeader className="header">
        <IonToolbar>
          <IonTitle>Recherche</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
      </IonContent>
      <div className="Search__trackresults">
        { tracks.map((track) => (
          <Track trackPreview={track} key={track.title} />
        ))}
      </div>
      <div className="Search__artistresults">
        { artists.map((artist) => (
          <Artist artist={artist} key={artist.name} />
        ))}
      </div>
    </IonPage>
  );
};

export default Search;
