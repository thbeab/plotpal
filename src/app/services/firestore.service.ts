import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  getGardens(): Observable<any[]>{
    return collectionData(collection(this.firestore, 'gardens'), {idField: 'id'});
  }
}
