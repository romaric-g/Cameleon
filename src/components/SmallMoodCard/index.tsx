import {IonThumbnail, IonTitle } from "@ionic/react";
import React from "react";
import Models from "../../types/models";
import "./index.scss"

interface SmallMoodCardsProps {
  mood: Models.Mood;
}

const SmallMoodCard: React.FC<SmallMoodCardsProps> = ({ mood }) => {
  return (
    <div className="SmallMoodCard">
      <div>
      <IonTitle>{mood.name}</IonTitle>
        <IonThumbnail>
          <img src={mood.image} alt="" />
          <IonTitle>{mood.name}</IonTitle>
        </IonThumbnail>
      </div>
    </div>
  );
};

export default SmallMoodCard;
