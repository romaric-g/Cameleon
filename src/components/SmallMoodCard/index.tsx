import {IonText } from "@ionic/react";
import React from "react";
import Models from "../../types/models";
import "./index.scss"

interface SmallMoodCardsProps {
  theme: Models.Theme,
  onClick?: () => void
}

const SmallMoodCard: React.FC<SmallMoodCardsProps> = ({ theme, onClick }) => {
  return (
    <div className="SmallMoodCard" onClick={onClick}>
      <IonText className="SmallMoodCard__title">{theme.title}</IonText>
      <div className="SmallMoodCard__background">
          <img src={theme.image} alt="" />
      </div>
    </div>
  );
};

export default SmallMoodCard;
