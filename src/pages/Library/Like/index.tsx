import React from "react";
import TrackPreview from "../../../components/TrackPreview";
import useSpotify from "../../../hooks/useSpotify";
import Models from "../../../types/models";
import "./index.css";

const Track: React.FC = () => {



    const { fetchSpotify} = useSpotify();
    const [ tracks, setTracks ] = React.useState<Models.Track[]>([]);

    fetchSpotify("https://api.spotify.com/v1/me/tracks?limit=50", (data) => {
        console.log(data)
        setTracks(
            data.items.map((track: any) => ({
                title: track.track.name,
                image: track.track.album.images[2].url,
                artist_name: track.track.artists[0].name,
                artist_id: track.track.artists[0].id
            }))
        )
    })

  return (
    <div className="Track">
        <div className="Playlist__tracksList ion-text-center">
            {tracks.map((track) => (
            <TrackPreview trackPreview={track} />
            ))}
        </div>
    </div>
  );
};
export default Track;
