import React from 'react';
import Services from './Services';
import firebase from 'firebase';
import {useCollection} from "react-firebase-hooks/firestore";
import {IonList} from '@ionic/react';

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
                        <Services doc={doc} key = {doc.id}/>
                    )
                );
            })}
        </IonList>
    );
}
export default ServiceList;