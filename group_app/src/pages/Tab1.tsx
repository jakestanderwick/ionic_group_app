import { IonContent, IonHeader, IonCardHeader, IonCard, IonPage, IonTitle, IonToolbar, } from '@ionic/react';
import React, {useState} from 'react';
import './Tab1.css';
import AddService from '../AddService';
import ServicesList from '../ServicesList';

const Home: React.FC = () => {

  const [current, setCurrent] = useState(null);

  const getEmpty = () => {
    return({
      title: '',
      content: '',
      date: '',
      location: '',
      picture: '',
      clear: '',
      initialValue: ''
    });
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Services Provided Near You!</IonTitle>
        </IonToolbar>
      </IonHeader>
      {}
      <IonContent>
        {
        <IonCard>
          <IonCardHeader>
            <h3>New Entry:</h3>
          </IonCardHeader>
            <AddService service={current} clear={()=>setCurrent(getEmpty())}/>
          {}
        </IonCard>
        }
        <ServicesList doc={setCurrent}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;