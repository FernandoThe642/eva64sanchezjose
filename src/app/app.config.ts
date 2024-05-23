import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAnalytics } from "firebase/analytics";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    importProvidersFrom(HttpClientModule), 
    provideFirebaseApp(() => initializeApp({  
      "apiKey": "AIzaSyATaCUSFaFNN_AqRyjimuqLgOTx9SHWtPs",
      "authDomain": "eva64sanchezjose.firebaseapp.com",
      "projectId": "eva64sanchezjose",
      "storageBucket": "eva64sanchezjose.appspot.com",
      "messagingSenderId": "641224814604",
      "appId": "1:641224814604:web:3b59ce428f2735dd2e3e29"
    })), 
    provideFirestore(() => getFirestore())]
};
