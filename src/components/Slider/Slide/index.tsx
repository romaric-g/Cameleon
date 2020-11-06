import React from 'react';
import { IonSlide } from '@ionic/react';
import Models from '../../../types/models';
import './index.css';

interface SlideProps {
    theme: Models.Theme
}

const Slide: React.FC<SlideProps> = ({theme}) => (
    <IonSlide>
        <div className="Slide">
            <img className="Slide__image" src={theme.image} alt=""/>
            <p className="Slide__text">{theme.title}</p>
        </div>
    </IonSlide>
);

export default Slide;