import { Component, OnInit } from '@angular/core';
import { collection, collectionData } from '@angular/fire/firestore';
import { FirestoreService } from '../services/firestore.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { GardenCardComponent } from '../components/garden-card/garden-card.component';


@Component({
  selector: 'app-gardens-page',
  standalone: true,
  imports: [AsyncPipe, GardenCardComponent],
  templateUrl: './gardens-page.component.html',
  styleUrl: './gardens-page.component.css'
})
export class GardensPageComponent implements OnInit{
  gardens$: Observable<any[]> = new Observable<any[]>();

  constructor(private firestore: FirestoreService) {}

  ngOnInit(): void {
    this.gardens$.subscribe((gardens) => {
      console.log(gardens);
    });

    this.gardens$ = this.firestore.getGardens()
  }
}
