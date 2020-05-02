import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent, useIonViewDidEnter,
    useIonViewDidLeave,
    useIonViewWillEnter,
    useIonViewWillLeave } from '@ionic/react';

export const AppOpenAlert: React.FC = () => {

  const [showAppOpenAlert, setShowAppOpenAlert] = useState(true);

  //useIonViewWillEnter(() => {
    //setShowAlert1(true);
  //});

    return (
      <IonContent>
        <IonAlert
          isOpen={showAppOpenAlert}
          onDidDismiss={() => setShowAppOpenAlert(false)}
          header={'Notice:'}
          subHeader={'Functionality of Service List Page!'}
          message=
          {
            'This app is created so those who need help and those generous enough to give can be connected. Hopefully we can promote sharing, community, and support during these trying times.'
          }
          buttons={['OK']}
        />
      </IonContent>
    );
}

export default AppOpenAlert;