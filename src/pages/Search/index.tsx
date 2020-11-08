import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import './index.css';

const Search: React.FC = () => {

  const [searchText, setSearchText] = React.useState('');

  return (
    <IonPage className="Search">
      <IonHeader className="header">
        <IonToolbar>
          <IonTitle>Recherche</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
      </IonContent>
    </IonPage>
  );
};

export default Search;
