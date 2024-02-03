import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"plotpal-25e9e","appId":"1:379680086741:web:84cad972e1307d10bfe05c","storageBucket":"plotpal-25e9e.appspot.com","apiKey":"AIzaSyAVM6972t4uPDQ5YP1XvqhrFWs0EVU1SUQ","authDomain":"plotpal-25e9e.firebaseapp.com","messagingSenderId":"379680086741","measurementId":"G-3XFJ8LDW9C"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
