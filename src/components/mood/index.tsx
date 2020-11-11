import { IonContent, IonItem, IonThumbnail, IonTitle } from "@ionic/react";
import React from "react";
import Models from "../../types/models";

interface SmallMoodCardsProps {
  smallMoodCards: Models.Mood;
}

const SmallMoodCards: React.FC<SmallMoodCardsProps> = ({ smallMoodCards }) => {
  return (
    <IonItem>
      <IonContent>
        <IonThumbnail>
          <img src={smallMoodCards.image} alt="" />
        </IonThumbnail>
        <IonTitle>{smallMoodCards.name}</IonTitle>
      </IonContent>
    </IonItem>
  );
};

export default SmallMoodCards;
