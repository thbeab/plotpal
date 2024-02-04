import { AfterViewInit, Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Input } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { AuthService } from '../../services/auth.service';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GardenIdService } from '../../services/garden-id.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [AsyncPipe, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements AfterViewInit{
  mess:any[] = [];
  gardenid:String = '';
  newMessage: String = '';
  messages$: Observable<any[]> = new Observable<any[]>();
  messagesRef: any;
  
  constructor(readonly fire: Firestore, readonly auth:AuthService, readonly ids: GardenIdService){
    
  }
  ngAfterViewInit(): void {
    this.messagesRef = collection(this.fire, `gardens/${this.ids.currentId}/chat`);
    this.messages$ = collectionData(this.messagesRef, {idField: 'id'});
    
    this.messages$.subscribe((array)=>{
      array.sort((a,b)=>{return a.timestamp-b.timestamp});
      this.mess = array;
    })
  }
  
  

  sendMessage(){
    const date = new Date()
    const month = date.getMonth() + 1
    const day = date.getDay()
    const year = date.getUTCFullYear()
    const hour = date.getHours()
    const minute = date.getMinutes()
    
    const currentDate = `${day}/${month}/${year} ${hour}:${minute}`
    
    const user = this.auth.getuser()
    addDoc(this.messagesRef, {user: {name: user?.displayName, photo:user?.photoURL},message: this.newMessage, timestamp:date.getTime(), date: currentDate})
    this.newMessage = ''
  }




}