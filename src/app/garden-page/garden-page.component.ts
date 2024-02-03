import { Component, Input } from '@angular/core';
import { Firestore, collection, doc, getDoc } from '@angular/fire/firestore';
import { Garden } from '../interfaces/garden';


@Component({
  selector: 'app-garden-page',
  standalone: true,
  imports: [],
  templateUrl: './garden-page.component.html',
  styleUrl: './garden-page.component.css'
})
export class GardenPageComponent {
  garden: Garden = {} as Garden;

  @Input()
  set id(id: string) {
    const gardensRef = collection(this.firestore, 'gardens');
    const gardenRef = doc(gardensRef, id)
    getDoc(gardenRef).then((doc) => {
      if (doc.exists()) {
        this.garden = doc.data() as Garden;
      }
  })
  }

  constructor(private firestore: Firestore) {}
}
