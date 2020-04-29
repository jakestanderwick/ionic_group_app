import React from 'react';
import Services from './Services';
import firebase from 'firebase';
import {useCollection} from "react-firebase-hooks/firestore";
import {IonList, IonCard, IonItem} from '@ionic/react';

interface Props {
    doc:any
}

const ServiceList: React.FC<Props> = () => {
    const [value, loading, error] = useCollection(
        firebase.firestore().collection("data").orderBy("service", "desc"),
        {
            snapshotListenOptions:{includeMetadataChanges:true}
        }
    );

    return(
        <IonList id="list">
            {value && value.docs.map(doc => {
                return(
                    !loading && (
                        <IonItem>
                            <IonCard id="cardItem">
                                <Services doc={doc} key = {doc.id}/>
                            </IonCard>
                        </IonItem>
                    )
                );
            })}
        </IonList>
    );
}
export default ServiceList;