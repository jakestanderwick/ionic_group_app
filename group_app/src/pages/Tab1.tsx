import { IonContent, IonHeader, IonCardHeader, IonCard, IonPage, IonTitle, IonToolbar, } from '@ionic/react';
import React, {useState} from 'react';
import './Tab1.css';
import AddService from '../AddService';
import ServicesList from '../ServicesList';
import AlertExample, { MapUseAlert } from '../MapUseAlert';

const Home: React.FC = () => {

  const [current, setCurrent] = useState(null);

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Services Provided Near You!</IonTitle>
        </IonToolbar>
      </IonHeader>
      {}
      <IonContent>
        <IonCard>
          <ServicesList doc={setCurrent}/>
        </IonCard>
        <MapUseAlert />
      </IonContent>
    </IonPage>
  );
};

export default Home;