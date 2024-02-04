import { Component, Input } from '@angular/core';
import { Plot } from '../../interfaces/plot';
import { FirestoreService } from '../../services/firestore.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-plot-card',
  standalone: true,
  imports: [],
  templateUrl: './plot-card.component.html',
  styleUrl: './plot-card.component.css'
})
export class PlotCardComponent {
  @Input() plot: Plot = {} as Plot;

  constructor(private firestore: FirestoreService, private auth: AuthService) { }

  claim() {
    if(!this.auth.getuser()) return alert('You must be logged in to claim a plot')
    this.firestore.claimPlot(this.plot.id, this.auth.getuser()?.uid as string, this.auth.getuser()?.displayName as string).then(() => {
      window.alert('Plot claimed')
    })
  }

}
