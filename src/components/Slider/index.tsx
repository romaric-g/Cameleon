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
  setBackimage: (url: string) => void,
}

const Slider: React.FC<SliderProps> = ({ themes, setBackimage }) => {

  const slidesRef = React.useRef<HTMLIonSlidesElement>(null);

  const onSlideChange = React.useCallback( async (e) => {
    const swiper = await slidesRef.current?.getSwiper();
    if(swiper) {
      const realIndex = swiper.realIndex;
      const theme = themes[realIndex];
      if(theme) {
        setBackimage(theme.image)
      }
    }
  }, [slidesRef, setBackimage, themes])

  if (!themes) return null;
  return (
    <IonSlides ref={slidesRef} options={slideOpts} onIonSlideDidChange={onSlideChange} >
      {themes.map((theme) => (
        <Slide theme={theme} key={theme.title} />
      ))}
    </IonSlides>
  );
}

export default Slider;