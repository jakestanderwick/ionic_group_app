import React from 'react';
import {IonItem, IonLabel, IonText, IonItemSliding, IonImg} from '@ionic/react';

interface ServiceP {
    doc:any
}

const Services: React.FC<ServiceP> = ({doc}) => {
    let data = doc.data();

    return(
        <IonItemSliding>
            <IonItem>
                <IonLabel class="ion-text-wrap">
                    <IonText className="item-title">
                        <div>
                            {data.service}
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                            {data.serviceType}
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                            {data.description}
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                            {data.name}
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                            {data.address}
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                            {data.city}
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                            {data.state}
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                            {data.phone}
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                            {data.email}
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                            {data.other}
                        </div>
                    </IonText>
                </IonLabel>
            </IonItem>
            {/*<IonItemOptions>
                <IonItemOption onClick={()=> {
                    doEdit(doc.id);
                }}>
                    <IonIcon slot="icon-only" icon={document}>

                    </IonIcon>
                </IonItemOption>

                <IonItemOption onClick={()=> {
                    doDelete(doc.id);
                }}>
                    <IonIcon slot="icon-only" icon={trash}>

                    </IonIcon>
                </IonItemOption>

            </IonItemOptions>
            */}
        </IonItemSliding>
    )
}
export default Services;