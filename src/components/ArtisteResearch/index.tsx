import { IonItem, IonText, IonThumbnail } from "@ionic/react";
import React from "react";
import Models from "../../types/models";
import "./index.scss";

interface ArtistProfilResearchProps {
  artist: Models.Artist;
}

const ArtistProfilResearch: React.FC<ArtistProfilResearchProps> = ({ artist }) => {
  return (
    <IonItem lines="none" className="ArtistPreview">
      <IonThumbnail slot="start">
        <img src={artist.image} alt="" />
      </IonThumbnail>
      <div className="ArtistPreview__texts">
      <IonText>{artist.name}</IonText>
      </div>
    </IonItem>
  );
};

export default ArtistProfilResearch;
