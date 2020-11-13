import { IonButton, IonImg } from '@ionic/react';
import React from 'react';
import Models from '../../types/models';
import './index.scss';

interface ThemeCardProps {
    theme: Models.Theme
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme }) => {
    return (
        <div className="ThemeCard">
            <IonButton expand="block">
                <div className="ThemeCard__content">
                    <p>{ theme.title }</p>
                </div>
                <IonImg src={theme.image} />
            </IonButton>
        </div>
    );
};

export default ThemeCard;
