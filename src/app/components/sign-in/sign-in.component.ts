import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GoogleAuthProvider, User, getAuth, signInWithPopup } from '@angular/fire/auth';
import { Auth } from '@angular/fire/auth'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  provider = new GoogleAuthProvider();
  user: any = null
  constructor(readonly signService: AuthService, readonly auth: Auth) { }

  ngOnInit(): void {
  }


  
  

  public signIn(){
    const auth = getAuth();
    signInWithPopup(auth, this.provider).then((result)=>{
      const creds = GoogleAuthProvider.credentialFromResult(result);
      const token = creds?.accessToken;
      const user = result.user;
      this.user = user

    }).catch(()=>{
      console.log("PPPP")
    })


  }

}
