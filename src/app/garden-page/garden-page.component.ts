import { Component, Input, inject } from '@angular/core';
import { Firestore, collection, doc, getDoc } from '@angular/fire/firestore';
import { Garden } from '../interfaces/garden';
import { ChatComponent } from '../components/chat/chat.component'
import { GardenIdService } from '../services/garden-id.service';
import { Storage, getStorage, ref, uploadBytesResumable } from '@angular/fire/storage';
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

  
  uploadFile(input: HTMLInputElement) {
    if (!input.files) return
      const store = getStorage()
      const files: FileList = input.files;

      for (let i = 0; i < files.length; i++) {
          const file = files.item(i);
          if (file) {
              const storageRef = ref(store, `images/${file.name}`);
              uploadBytesResumable(storageRef, file);
          }
      }
  }


  constructor(private firestore: Firestore, readonly gardeId: GardenIdService, readonly storage: Storage) {}
}
