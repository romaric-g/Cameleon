import { IonContent, IonItem, IonThumbnail, IonTitle } from "@ionic/react";
import React from "react";
import Models from "../../types/models";

interface ArtistProfilResearchProps {
  artist: Models.Artist;
}

const ArtistProfilResearch: React.FC<ArtistProfilResearchProps> = ({ artist }) => {
  return (
    <IonItem>
      <IonContent slot="start">
        <IonThumbnail>
          <img src={artist.image} alt="" />
        </IonThumbnail>
        <IonTitle>{artist.name}</IonTitle>
      </IonContent>
    </IonItem>
  );
};

export default ArtistProfilResearch;
