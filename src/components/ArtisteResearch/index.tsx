import { IonContent, IonItem, IonThumbnail, IonTitle } from "@ionic/react";
import React from "react";
import Models from "../../types/models";

interface ArtisteProfilResearchProps {
  artisteProfilResearch: Models.Artist;
}

const ArtisteProfilResearch: React.FC<ArtisteProfilResearchProps> = ({ artisteProfilResearch }) => {
  return (
    <IonItem>
      <IonContent slot="start">
        <IonThumbnail>
          <img src={artisteProfilResearch.image} alt="" />
        </IonThumbnail>
        <IonTitle>{artisteProfilResearch.name}</IonTitle>
      </IonContent>
    </IonItem>
  );
};

export default ArtisteProfilResearch;
