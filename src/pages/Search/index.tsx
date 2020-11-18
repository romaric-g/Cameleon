import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext, useEffect } from 'react';
import Track from '../../components/TrackPreview';
import Artist from '../../components/ArtisteResearch';
import './index.scss';
import { SpotifyContext } from '../../components/SpotifyProvider';

const Search: React.FC = () => {

  const [searchText, setSearchText] = React.useState('');
  const { spotifyApi } = useContext(SpotifyContext) as any
  
  const [tracks, setTracks] = React.useState<any[]>([]);
  const [artists, setArtist] = React.useState<any[]>([]);

  useEffect(() => {
    const searchTracks = async () => {
      const results = await spotifyApi.searchTracks(searchText, { limit: 5 })
      setTracks(results.tracks.items)
    }
    const searchArtists = async () => {
      const results = await spotifyApi.searchArtists(searchText, { limit: 5 })
      setArtist(results.artists.items)
    }
    searchTracks();
    searchArtists()
  }, [spotifyApi, searchText])

  return (
    <IonPage className="Search">
      <IonHeader className="Search__Header">
        <IonToolbar>
          <IonTitle>RECHERCHE</IonTitle>
        </IonToolbar>
        <IonSearchbar className="Search__Header__bar" placeholder="Que recherchez-vous ?" onIonChange={e => setSearchText(e.detail.value!)}> </IonSearchbar>
      </IonHeader>
      <IonContent>
        <div className="Search__artistresults">
          { artists.map((artist) => (
            <Artist artist={{
              id: artist.id,
              name: artist.name,
              image: artist.images[0] ? artist.images[0].url : null,
            }} key={artist.id} />
          ))}
        </div>
        <div className="Search__trackresults">
          { tracks.map((track, index) => (
            <Track hideLike trackPreview={{
              title: track.name,
              image: track.album.images && track.album.images[2].url,
              artist_name: track.artists[0].name,
              artist_id: track.artists[0].id,
            }} key={index} />
          ))}
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Search;
