import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup} from '@angular/fire/auth';
import { collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-gardens-page',
  standalone: true,
  imports: [],
  templateUrl: './gardens-page.component.html',
  styleUrl: './gardens-page.component.css'
})
export class GardensPageComponent {
  constructor(private auth: Auth){}

  

}
