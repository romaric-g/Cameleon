import React from 'react';
import { IonSlide } from '@ionic/react';
import Models from '../../../types/models';
import './index.scss';

interface SlideProps {
    theme: Models.Theme,
}

const Slide: React.FC<SlideProps> = ({ theme }) => {

    const showPlayer = React.useCallback(() => {

    }, []);

    return (
        <IonSlide>
            <div className="Slide" onClick={showPlayer}>
                <img className="Slide__image" src={theme.image} alt=""/>
                <p className="Slide__text">{theme.title}</p>
            </div>
        </IonSlide>
    );
}

export default Slide;