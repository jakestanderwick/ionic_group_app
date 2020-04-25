import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import {useDocument} from 'react-firebase-hooks/firestore';
import {IonItem, IonButton, IonInput, IonCard, IonCardContent, IonSelect, IonSelectOption} from '@ionic/react';
import ServiceProps from './components/ServiceProps';
import {useCamera} from '@ionic/react-hooks/camera';

export function debugInfo(logInfo:ServiceProps){
    console.log(
        logInfo.service,
        logInfo.serviceType, 
        logInfo.description, 
        logInfo.name, 
        logInfo.address, 
        logInfo.city, 
        logInfo.state, 
        logInfo.phone, 
        logInfo.email, 
        logInfo.other);
}
export function clearInfo(info:ServiceProps){
    info.service='';
    info.serviceType='';
    info.description='';
    info.name='';
    info.address='';
    info.city='';
    info.state='';
    info.phone='';
    info.email='';
    info.other='';
    info.clear='';
};

const AddItem: React.FC<ServiceProps> = (props) => {
    const [item, setItem] = useState<ServiceProps>({
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
    const {getPhoto} = useCamera();

    const [value, loading, error] = useDocument(
        firebase.firestore().doc("data/" + props.service),{
            snapshotListenOptions: {includeMetadataChanges:true}
        }
    );

    useEffect(() => {
        !loading && props.service && value?.exists && setItem(value.data().name);
    },
    [loading, props.service, value]);

    const onSave = async () => {
        let collectionRef = firebase.firestore().collection("data");
        if (props.service){
            await(collectionRef).doc(props.service).set({
                service : item.service, serviceType: item.serviceType,
                description : item.description,
                name : item.name, address : item.address,
                city : item.city, state : item.state,
                phone : item.phone, email : item.email,
                other : item.other});
                clearInfo(item);
                setItem(item);
                props.clear();
        }
        else{
            await collectionRef.add({
                service : item.service, serviceType: item.serviceType,
                description : item.description,
                name : item.name, address : item.address,
                city : item.city, state : item.state,
                phone : item.phone, email : item.email,
                other : item.other});
                clearInfo(item);
                setItem(item);
                props.clear();
        }
    };

    const updateField = e => {
        e.preventDefault();
        debugInfo(item);
        setItem({
            ...item,
            [e.target.name]:e.target.value
        });
    };

    return (
        <IonCard>
            <IonCardContent>
          <h2>What Service Is Being Offered?</h2>
            <IonItem>
              <IonInput placeholder="Title" name="title">
              </IonInput>
              <IonSelect value={item.serviceType} placeholder="Service Type" name="serviceType" onIonChange={updateField}>
              <IonSelectOption value="Food">Food</IonSelectOption>
              <IonSelectOption value="Housing">Housing</IonSelectOption>
              <IonSelectOption value="Labor">Labor</IonSelectOption>
              <IonSelectOption value="Other">Other</IonSelectOption>
            </IonSelect>
            </IonItem>
            <h2>Please describe the service below.</h2>
            <IonItem>
              <IonInput value={item.description} placeholder="Description" name="description" onIonChange={updateField}>
              </IonInput>
            </IonItem>
            <h2>Who is offering this service?</h2>
            <IonItem>
              <IonInput value={item.name} placeholder="Name" name="name" onIonChange={updateField}>
              </IonInput>
            </IonItem>
            <h2>Where is the service located?</h2>
            <IonItem>
              <IonInput value={item.address} placeholder="Address" name="address" onIonChange={updateField}>
              </IonInput>
              <IonInput value={item.city} placeholder="City" name="city" onIonChange={updateField}>
              </IonInput>
              <IonInput value={item.state} placeholder="State" name="state" onIonChange={updateField}>
              </IonInput>
            </IonItem>
            <h2>How can the service provider be contacted?</h2>
            <IonItem>
            
              <IonInput value={item.phone} placeholder="Phone" name="phone" onIonChange={updateField}>
              </IonInput>
              <IonInput value={item.email} placeholder="Email" name="email" onIonChange={updateField}>
              </IonInput>
              <IonInput value={item.other} placeholder="Other" name="other" onIonChange={updateField}>
              </IonInput>
            </IonItem>

            <IonButton onClick={onSave}>Upload</IonButton>
          </IonCardContent>
        </IonCard>
    );
}
export default AddItem;