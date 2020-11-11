import React from 'react';
import PlaylistPreview from '../../../components/PlaylistPreview';
import Models from '../../../types/models';
import './index.css';

const Mood: React.FC = () => {

    const playlists: Models.PlaylistPreview[] = React.useMemo(() => {
        return [
            {
                title: "jour de pluie",
                image: "/assets/image/Sensuel_Plan de travail 1.jpg",
                titleAmount: 12,
            },
            {
                title: "lundi matin",
                image: "/assets/image/Sensuel_Plan de travail 1.jpg",
                titleAmount: 6,
            },
            {
                title: "sport",
                image: "/assets/image/Sensuel_Plan de travail 1.jpg",
                titleAmount: 1,
            },
            {
                title: "go crazy",
                image: "/assets/image/Sensuel_Plan de travail 1.jpg",
                titleAmount: 25,
            }
        ]
        }, []);
    
    return (
        <div className="Mood">
            { playlists.map((playlist) => (
                <PlaylistPreview playlistPreview={playlist} key={playlist.title} />
            ))}
        </div>
    );
};

export default Mood;
