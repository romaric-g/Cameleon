import React from 'react';
import { IonSlides } from '@ionic/react';
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

const Slider: React.FC<SliderProps> = ({ themes}) => (
  <IonSlides options={slideOpts}>
    {themes.map((theme) => (
      <Slide theme={theme} key={theme.title} />
    ))}
  </IonSlides>
);


export default Slider;