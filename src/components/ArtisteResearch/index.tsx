import { IonItem, IonText, IonThumbnail } from "@ionic/react";
import React from "react";
import Models from "../../types/models";

interface ArtistProfilResearchProps {
  artist: Models.Artist;
}

const ArtistProfilResearch: React.FC<ArtistProfilResearchProps> = ({ artist }) => {
  return (
    <IonItem>
      <IonThumbnail>
        <img src={artist.image} alt="" />
      </IonThumbnail>
      <IonText>{artist.name}</IonText>
    </IonItem>
  );
};

export default ArtistProfilResearch;
