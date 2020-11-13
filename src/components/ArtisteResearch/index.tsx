import { IonText } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import Models from "../../types/models";
import "./index.scss";

interface ArtistProfilResearchProps {
  artist: Models.Artist;
}

const ArtistProfilResearch: React.FC<ArtistProfilResearchProps> = ({ artist }) => {

  const history = useHistory();

  return (
    <div className="ArtistPreview" onClick={() => history.push('/artist/' + artist.id)}>
      <div className="ArtistPreview__background">
        <img src={artist.image} alt="" />
      </div>
      <div className="ArtistPreview__texts">
        <IonText>{artist.name}</IonText>
      </div>
    </div>
  );
};

export default ArtistProfilResearch;
