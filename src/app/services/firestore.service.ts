import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, DocumentReference, DocumentData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  getGardens(): Observable<any[]>{
    return collectionData(collection(this.firestore, 'gardens'), {idField: 'id'});
  }

  addGarden(garden: any): Promise<DocumentReference<any, DocumentData>>{
    const gardensRef = collection(this.firestore, 'gardens');
    return addDoc(gardensRef, garden);
  }
}
