import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Firestore, collection, doc, getDoc } from '@angular/fire/firestore';
import { FirestoreService } from '../services/firestore.service';
import { Garden } from '../interfaces/garden';
import { ChatComponent } from '../components/chat/chat.component'
import { GardenIdService } from '../services/garden-id.service';
import { Storage, getStorage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { PlotCardComponent } from '../components/plot-card/plot-card.component';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-garden-page',
    standalone: true,
    templateUrl: './garden-page.component.html',
    styleUrl: './garden-page.component.css',
    imports: [ChatComponent, FormsModule, PlotCardComponent, AsyncPipe]
})
export class GardenPageComponent implements OnInit{
  garden: Garden = {} as Garden;
  plotNumber: string = '';

  plots$ = new Observable<any[]>();

  @ViewChild("success_modal") successModal: ElementRef<HTMLDialogElement> | undefined;

  @Input()
  set id(id: string) {
    this.gardeId.currentId = id

    console.log(this.gardeId.currentId)

    this.firestore.getGarden(id).then((doc) => {
      if (doc.exists()) {
        this.garden = doc.data() as Garden;
      }
    })
  }



  ngOnInit(): void {
    this.plots$ = this.firestore.getPlots(this.gardeId.currentId)
  }

  addPlot(){
    this.firestore.addPlot(this.gardeId.currentId, this.plotNumber).then(() => {
      this.successModal?.nativeElement.showModal();
    })
  }

  
  


  constructor(private firestore: FirestoreService, readonly gardeId: GardenIdService, readonly storage: Storage) {}
}
