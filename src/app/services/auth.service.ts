import { Injectable } from '@angular/core';
import { GoogleAuthProvider, getAuth, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  provider = new GoogleAuthProvider();
  constructor() { }
  

  public signIn(){
    const auth = getAuth();
    signInWithPopup(auth, this.provider).then((result)=>{
      const creds = GoogleAuthProvider.credentialFromResult(result);
      const token = creds?.accessToken;
      const user = result.user;
      console.log(user);

    }).catch(()=>{
      console.log("PPPP")
    })


  }
}
