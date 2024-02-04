import { Component, Input } from '@angular/core';
import { Garden } from '../../interfaces/garden';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-garden-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './garden-card.component.html',
  styleUrl: './garden-card.component.css'
})
export class GardenCardComponent {
  @Input() garden: Garden = {} as Garden;

}
