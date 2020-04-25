import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { useDocument } from "react-firebase-hooks/firestore";
import { IonItem, IonButton, IonInput, IonCard, IonCardContent } from '@ionic/react';
//import DataProps from './components/DataProps';
import { Plugins } from '@capacitor/core';
//import { useCamera } from '@ionic/react-hooks/camera';
import { CameraResultType, CameraSource } from '@capacitor/core';