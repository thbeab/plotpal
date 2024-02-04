import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GoogleAuthProvider, User, getAuth, signInWithPopup, user } from '@angular/fire/auth';
import { Auth } from '@angular/fire/auth'
import { CommonModule } from '@angular/common'
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  standalone: true,
  imports:[CommonModule, AsyncPipe]
})
export class SignInComponent implements OnInit, AfterViewInit {
  provider = new GoogleAuthProvider();
  user$: Observable<User|null>
  
  constructor(readonly signService: AuthService, readonly auth: Auth) { 
   this.user$ = user(this.auth)
  
  }
  
  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    console.log("A")
   
  }

  pi(){
   
  }
  

}
