import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonInput, IonItem, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
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
          <IonCardHeader>

          </IonCardHeader>
         
          <IonCardContent>
          <h2>What Service Is Being Offered?</h2>
            <IonItem>
              <IonInput placeholder="Title" name="title">
              </IonInput>
              <IonSelect placeholder="Service Type">
              <IonSelectOption value="food">Food</IonSelectOption>
              <IonSelectOption value="housing">Housing</IonSelectOption>
              <IonSelectOption value="labor">Labor</IonSelectOption>
              <IonSelectOption value="other">Other</IonSelectOption>
            </IonSelect>
            </IonItem>
            <h2>Please describe the service below.</h2>
            <IonItem>
              <IonInput placeholder="Description" name="description">
              </IonInput>
            </IonItem>
            <h2>Who is offering this service?</h2>
            <IonItem>
              <IonInput placeholder="Myself or Other" name="Source">
              </IonInput>
            </IonItem>
            <h2>Where is the service located?</h2>
            <IonItem>
              <IonInput placeholder="Address" name="title">
              </IonInput>
              <IonInput placeholder="City" name="Title">
              </IonInput>
              <IonInput placeholder="State" name="title">
              </IonInput>
            </IonItem>
            <h2>How can the service provider be contacted?</h2>
            <IonItem>
            
              <IonInput placeholder="Phone" name="title">
              </IonInput>
              <IonInput placeholder="Email" name="title">
              </IonInput>
              <IonInput placeholder="Other" name="title">
              </IonInput>
            </IonItem>

            <IonButton>Upload
                    </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
