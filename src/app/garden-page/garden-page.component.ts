import { Component, Input } from '@angular/core';
import { Firestore, collection, doc, getDoc } from '@angular/fire/firestore';
import { Garden } from '../interfaces/garden';
import { ChatComponent } from '../components/chat/chat.component'
import { GardenIdService } from '../services/garden-id.service';
@Component({
    selector: 'app-garden-page',
    standalone: true,
    templateUrl: './garden-page.component.html',
    styleUrl: './garden-page.component.css',
    imports: [ChatComponent]
})
export class GardenPageComponent {
  garden: Garden = {} as Garden;
  @Input()
  set id(id: string) {
    this.gardeId.currentId = id
    const gardensRef = collection(this.firestore, 'gardens');
    const gardenRef = doc(gardensRef, id)
    getDoc(gardenRef).then((doc) => {
      if (doc.exists()) {
        this.garden = doc.data() as Garden;
      }
  })
  }

  constructor(private firestore: Firestore, readonly gardeId: GardenIdService) {}
}
