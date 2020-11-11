import { IonContent, IonItem, IonThumbnail, IonTitle } from "@ionic/react";
import React from "react";
import Models from "../../types/models";

interface SmallMoodCardsProps {
  mood: Models.Mood;
}

const SmallMoodCard: React.FC<SmallMoodCardsProps> = ({ mood }) => {
  return (
    <IonItem>
      <IonContent>
        <IonThumbnail>
          <img src={mood.image} alt="" />
        </IonThumbnail>
        <IonTitle>{mood.name}</IonTitle>
      </IonContent>
    </IonItem>
  );
};

export default SmallMoodCard;
