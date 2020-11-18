import React from 'react';
import PlaylistPreview from '../../../components/PlaylistPreview';
import useSpotify from '../../../hooks/useSpotify';
import './index.css';

const Mood: React.FC = () => {

    const { fetchSpotify } = useSpotify();
    const [ playlists, setPlaylists ] = React.useState([]);

    fetchSpotify('https://api.spotify.com/v1/me/playlists', 
        (data) => {
            if (data.items)setPlaylists(data.items)
        }
    )

    return (
        <div className="Mood">
            { playlists.map((playlist: any) => (
                <PlaylistPreview playlistPreview={{
                    title: playlist.name,
                    image: playlist.images[0].url,
                    titleAmount: playlist.tracks.total,
                    id: playlist.id,
                    uri: playlist.uri,
                }} key={playlist.id} id={playlist.id}  />
            ))}
        </div>
    );
};

export default Mood;
