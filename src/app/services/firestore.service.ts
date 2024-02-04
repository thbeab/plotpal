import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, DocumentReference, DocumentData, getDoc, doc, updateDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Plot } from '../interfaces/plot';
import { GardenIdService } from './garden-id.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore, private gardenId: GardenIdService) { }

  getGardens(): Observable<any[]>{
    return collectionData(collection(this.firestore, 'gardens'), {idField: 'id'});
  }

  addGarden(garden: any): Promise<DocumentReference<any, DocumentData>>{
    const gardensRef = collection(this.firestore, 'gardens');
    return addDoc(gardensRef, garden);
  }

  addPlot(gardenId: string, number: string): Promise <DocumentReference<any, DocumentData>>{
    const plotsRef = collection(this.firestore, `gardens/${gardenId}/plots`);
    return addDoc(plotsRef, { number });
  }

  getGarden(id: string){
    const gardensRef = collection(this.firestore, 'gardens');
    const gardenRef = doc(gardensRef, id)
    return getDoc(gardenRef)
  }

  getPlots(gardenId: string): Observable<any[]>{
    return collectionData(collection(this.firestore, `gardens/${gardenId}/plots`), {idField: 'id'});
  }

  claimPlot(id: string, userId: string, userName: string){
    const plotRef = doc(this.firestore, `gardens/${this.gardenId.currentId}/plots/${id}`);
    return updateDoc(plotRef, {userId: userId, userName: userName});
  }
}
