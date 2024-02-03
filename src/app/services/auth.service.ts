import { Injectable } from '@angular/core';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  provider = new GoogleAuthProvider();
  constructor() {
    const user = localStorage.getItem("user");
    this.user = user ? user : null
    console.log("ABC" + this.user)
   }
  

  public signIn(){
    const auth = getAuth();
    signInWithPopup(auth, this.provider).then((result)=>{
      const creds = GoogleAuthProvider.credentialFromResult(result);
      const token = creds?.accessToken;
      this.user = result.user;
      localStorage.setItem("user", JSON.stringify(this.user));
      
      console.log(this.user);

    }).catch(()=>{
      console.log("PPPP")
    })


  }

  public logOut(){
    const auth = getAuth();
    signOut(auth).then(()=>{
      console.log("AVC");
      this.user = null
      localStorage.removeItem("user")
    })
  }
}
