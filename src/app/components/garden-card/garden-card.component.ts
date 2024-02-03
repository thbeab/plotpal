import { Component, Input } from '@angular/core';
import { Garden } from '../../interfaces/garden';

@Component({
  selector: 'app-garden-card',
  standalone: true,
  imports: [],
  templateUrl: './garden-card.component.html',
  styleUrl: './garden-card.component.css'
})
export class GardenCardComponent {
  @Input() garden: Garden = {} as Garden;

}
