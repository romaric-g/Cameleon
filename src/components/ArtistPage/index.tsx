import { IonContent, IonItem, IonText, IonThumbnail, IonTitle } from "@ionic/react";
import React from "react";
import Models from "../../types/models";
import SmallMoodCards from "../mood";

interface ArtistePageProps {
  artistePage: Models.ArtisteProfil;
}

const ArtistePage: React.FC<ArtistePageProps> = ({ artistePage }) => {

  return (
    <IonItem>
      <IonContent slot="start">
        <IonThumbnail>
          <img src={artistePage.image} alt="" />
        </IonThumbnail>
        <IonTitle>{artistePage.name}</IonTitle>
      </IonContent>
      <div>
        
      <IonText>
      Moods associés
      </IonText>
      
      </div>
    </IonItem>
  );
};

export default ArtistePage;
