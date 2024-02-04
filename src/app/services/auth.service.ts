import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, User, getAuth, signInWithPopup, signOut } from '@angular/fire/auth';
import { Subject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  provider = new GoogleAuthProvider();
 
  constructor() {
    
   }
  

   public getuser(){
    const auth = getAuth();
    console.log("auth")
    console.log(auth.currentUser)
    return auth.currentUser
   }

  public signIn(){
    const auth = getAuth();
    signInWithPopup(auth, this.provider).then((result)=>{
      const creds = GoogleAuthProvider.credentialFromResult(result);
      const token = creds?.accessToken;
      
      
      

    }).catch((error)=>{
      console.log(error)
    })


  }

  public logOut(){
    const auth = getAuth();
    signOut(auth).then(()=>{
    })
  }
}
