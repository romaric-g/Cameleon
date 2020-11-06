import React from 'react';
import { IonSlides, IonContent } from '@ionic/react';
import Models from '../../types/models';
import Slide from './Slide/';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

interface SliderProps {
    themes: Models.Theme[],
}

const Slider: React.FC<SliderProps> = (props) => {

  return (
    <IonContent>
      <IonSlides options={slideOpts}>
        {props.themes.map((theme) => (
          <Slide theme={theme} key={theme.title} />
        ))}
      </IonSlides>
    </IonContent>
  );
}

export default Slider;