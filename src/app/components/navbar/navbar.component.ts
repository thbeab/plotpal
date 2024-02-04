import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Auth, user } from '@angular/fire/auth';
import { AsyncPipe } from '@angular/common'
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user$ = user(this.autha)

  constructor(readonly auth:AuthService, readonly autha: Auth){

  }
}
