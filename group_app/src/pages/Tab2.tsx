import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonInput, IonItem, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import AddService from '../AddService';
import './Tab2.css';
import ServiceUseAlert from '../ServiceUseAlert';

const Tab2: React.FC = () => {
  const [current, setCurrent] = useState(null);

  const getEmpty = () => {
    return({
      service:'',
      serviceType:'',
      description:'',
      name:'',
      address:'',
      city:'',
      state:'',
      phone:'',
      email:'',
      other:''
    });
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Post a Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <AddService service={current} clear={()=>setCurrent(getEmpty())}/>
        </IonCard>
        <ServiceUseAlert />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
