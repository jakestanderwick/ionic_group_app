import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent, useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave } from '@ionic/react';

export const ServiceUseAlert: React.FC = () => {

  const [showServiceAlert, setShowServiceAlert] = useState(true);

  //useIonViewWillEnter(() => {
    //setShowServiceReminderAlert(true);
  //});

    return (
      <IonContent>
        <IonAlert
          isOpen={showServiceAlert}
          onDidDismiss={() => setShowServiceAlert(false)}
          header={'Notice:'}
          subHeader={'Functionality of Service Add Page!'}
          message=
          {
            'Use this page to add any service that yourself or others offer, for free! Please refrain from posting anything off topic, and thank you for your generosity.'
          }
          buttons={['OK']}
        />
      </IonContent>
    );
}

export default ServiceUseAlert;