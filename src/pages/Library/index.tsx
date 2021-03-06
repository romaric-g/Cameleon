import { IonContent, IonHeader, IonLabel, IonPage, IonSegment, IonSegmentButton, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Like from './Like';
import Mood from './Mood';
import './index.scss';

const Library: React.FC = () => {

  const moodsButtonRef = React.useRef<HTMLIonSegmentButtonElement>(null);
  const likedButtonRef = React.useRef<HTMLIonSegmentButtonElement>(null);

  const slidesRef = React.useRef<HTMLIonSlidesElement>(null);

  const slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoHeight: false,
  };

  const onSegmentChange = React.useCallback( (event: CustomEvent ) => {
    let value = event.detail.value;
    if (value === 'moods') {
      slidesRef.current?.slideTo(0);
    }
    if (value === 'liked') {
      slidesRef.current?.slideTo(1);
    }

  }, [slidesRef])

  const onSlideChange = React.useCallback( async (event: CustomEvent ) => {
    const swiper = await slidesRef.current?.getSwiper();
    const realIndex = swiper.realIndex;

    if(realIndex === 0) {
      moodsButtonRef.current?.click()
    }
    if (realIndex === 1) {
      likedButtonRef.current?.click()
    }
  }, [slidesRef])

  return (
    <IonPage className="Library">
      <IonHeader>
        <IonToolbar>
          <IonTitle>BIBLIOTHEQUE</IonTitle>
        </IonToolbar>
        <IonSegment value="moods" onIonChange={onSegmentChange}>
          <IonSegmentButton value="moods" ref={moodsButtonRef}>
            <IonLabel className="Library__moods">Mes moods</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="liked" ref={likedButtonRef}>
            <IonLabel className="Library__likes">Titres likés</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent className="Library__content">
        <IonSlides className="Library__content__slider" options={slideOpts} ref={slidesRef} onIonSlideWillChange={onSlideChange}>
          <IonSlide className="Library__content__page">
            <Mood/>
          </IonSlide>
          <IonSlide className="Library__content__page">
            <Like />
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Library;
