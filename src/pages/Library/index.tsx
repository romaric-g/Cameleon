import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonSegment, IonSegmentButton, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Like from './Like';
import Mood from './Mood';
import './index.css';
import { settings } from 'ionicons/icons';

const Library: React.FC = () => {

  const moodsButtonRef = React.useRef<HTMLIonSegmentButtonElement>(null);
  const likedButtonRef = React.useRef<HTMLIonSegmentButtonElement>(null);

  const slidesRef = React.useRef<HTMLIonSlidesElement>(null);

  const slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  console.log(slidesRef.current)

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
          <IonTitle className="cameleon-title">Cameleon</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={settings} />
            </IonButton>
          </IonButtons>
          <IonTitle>Bibliothèque</IonTitle>
        </IonToolbar>
        <IonSegment value="moods" onIonChange={onSegmentChange}>
          <IonSegmentButton value="moods" ref={moodsButtonRef}>
            <IonLabel>Mes moods</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="liked" ref={likedButtonRef}>
            <IonLabel>Titres likés</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent>
        <IonSlides options={slideOpts} ref={slidesRef} onIonSlideWillChange={onSlideChange}>
          <IonSlide>
            <Mood/>
          </IonSlide>
          <IonSlide>
            <Like />
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Library;
