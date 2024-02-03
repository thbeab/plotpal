import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GoogleAuthProvider, User, getAuth, signInWithPopup } from '@angular/fire/auth';
import { Auth } from '@angular/fire/auth'
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class SignInComponent implements OnInit {
  provider = new GoogleAuthProvider();
  constructor(readonly signService: AuthService, readonly auth: Auth) { }

  ngOnInit(): void {
  }


  

}
