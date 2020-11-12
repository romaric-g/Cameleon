import React from 'react';
import PlaylistPreview from '../../../components/PlaylistPreview';
import useSpotify from '../../../hooks/useSpotify';
import './index.css';

const Mood: React.FC = () => {

    const { fetchSpotify } = useSpotify();
    const [ playlists, setPlaylists ] = React.useState([]);

    fetchSpotify('https://api.spotify.com/v1/me/playlists', 
        (data) => {
            setPlaylists(data.items)
        }
    )

    console.log(playlists)

    return (
        <div className="Mood">
            { playlists.map((playlist: any) => (
                <PlaylistPreview playlistPreview={{
                    title: playlist.name,
                    image: playlist.images[0].url,
                    titleAmount: playlist.tracks.total
                }} key={playlist.id} />
            ))}
        </div>
    );
};

export default Mood;
