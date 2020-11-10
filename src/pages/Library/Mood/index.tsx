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
        <div className="Mood">
            { playlists.map((playlist) => (
                <PlaylistPreview playlistPreview={playlist} key={playlist.title} />
            ))}
        </div>
    );
};

export default Mood;
