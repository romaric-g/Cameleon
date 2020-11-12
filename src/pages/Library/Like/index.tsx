import React from 'react';
import PlaylistPreview from '../../../components/PlaylistPreview';
import Models from '../../../types/models';
import './index.css';

const Like: React.FC = () => {

    const playlists: Models.PlaylistPreview[] = React.useMemo(() => {
        return [
            {
                title: "triste",
                image: "/assets/image/Sensuel_Plan de travail 1.jpg",
                titleAmount: 85,
            },
            {
                title: "rêveur",
                image: "/assets/image/Sensuel_Plan de travail 1.jpg",
                titleAmount: 2,
            },
            {
                title: "energique",
                image: "/assets/image/Sensuel_Plan de travail 1.jpg",
                titleAmount: 14,
            },
            {
                title: "cool",
                image: "/assets/image/Sensuel_Plan de travail 1.jpg",
                titleAmount: 15,
            }
        ]
        }, []);
    
    return (
        <div className="Like">
            { playlists.map((playlist) => (
                <PlaylistPreview playlistPreview={playlist} key={playlist.title} />
            ))}
        </div>
    );
};

export default Like;
