import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Firestore, collection, doc, getDoc } from '@angular/fire/firestore';
import { FirestoreService } from '../services/firestore.service';
import { Garden } from '../interfaces/garden';
import { ChatComponent } from '../components/chat/chat.component'
import { GardenIdService } from '../services/garden-id.service';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-garden-page',
    standalone: true,
    templateUrl: './garden-page.component.html',
    styleUrl: './garden-page.component.css',
    imports: [ChatComponent, FormsModule]
})
export class GardenPageComponent {
  garden: Garden = {} as Garden;
  plotNumber: string = '';

  @ViewChild("success_modal") successModal: ElementRef<HTMLDialogElement> | undefined;

  @Input()
  set id(id: string) {
    this.gardeId.currentId = id

    this.firestore.getGarden(id).then((doc) => {
      if (doc.exists()) {
        this.garden = doc.data() as Garden;
      }
    })
  }

  constructor(private firestore: FirestoreService, readonly gardeId: GardenIdService) {}

  addPlot(){
    this.firestore.addPlot(this.gardeId.currentId, this.plotNumber).then(() => {
      this.successModal?.nativeElement.showModal();
    })
  }
}
