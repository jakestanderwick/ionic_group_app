import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent, useIonViewDidEnter,
    useIonViewDidLeave,
    useIonViewWillEnter,
    useIonViewWillLeave } from '@ionic/react';

export const MapUseAlert: React.FC = () => {

  const [showMapAlert, setShowMapAlert] = useState(true);

  //useIonViewWillEnter(() => {
    //setShowAlert1(true);
  //});

    return (
      <IonContent>
        <IonAlert
          isOpen={showMapAlert}
          onDidDismiss={() => setShowMapAlert(false)}
          header={'Notice:'}
          subHeader={'Functionality of Service List Page!'}
          message=
          {
            'Use this page to see services near you! If you tap/click on an item, it will redirect you its location in Google Maps!'
          }
          buttons={['OK']}
        />
      </IonContent>
    );
}

export default MapUseAlert;