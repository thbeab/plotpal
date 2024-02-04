import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { collection, collectionData } from '@angular/fire/firestore';
import { FirestoreService } from '../services/firestore.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { GardenCardComponent } from '../components/garden-card/garden-card.component';
import { FormsModule } from '@angular/forms';
import { Garden } from '../interfaces/garden';


@Component({
  selector: 'app-gardens-page',
  standalone: true,
  imports: [AsyncPipe, GardenCardComponent, FormsModule],
  templateUrl: './gardens-page.component.html',
  styleUrl: './gardens-page.component.css'
})
export class GardensPageComponent implements OnInit{
  @ViewChild("success_modal") successModal: ElementRef<HTMLDialogElement> | undefined;
  gardens$: Observable<any[]> = new Observable<any[]>();
  newGarden: Garden = {} as Garden;

  constructor(private firestore: FirestoreService) {}

  ngOnInit(): void {
    this.gardens$.subscribe((gardens) => {
      console.log(gardens);
    });

    this.gardens$ = this.firestore.getGardens()
  }

  addGarden() {
    this.firestore.addGarden(this.newGarden).then(() => {
      this.successModal?.nativeElement.showModal();
    })
    this.newGarden = {} as Garden;
  }

  getGarden(id: string) {
    return this.firestore.getGarden(id);
  }
}
