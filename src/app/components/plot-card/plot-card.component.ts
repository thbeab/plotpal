import { AfterViewInit, Component, Input } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { Plot } from '../../interfaces/plot';
import { GardenIdService } from '../../services/garden-id.service';
import { AuthService } from '../../services/auth.service';
const DEFAULT_GARDEN_URL = "../../../assets/default_garden.jpg"

import { FirestoreService } from '../../services/firestore.service';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-plot-card',
  standalone: true,
  imports: [],
  templateUrl: './plot-card.component.html',
  styleUrl: './plot-card.component.css'
})
export class PlotCardComponent implements AfterViewInit{
  @Input() plot: Plot = {} as Plot;
  constructor(private firestore: FirestoreService, readonly auth: AuthService, readonly gadenID: GardenIdService) { }

  async claim() {
    if (!await this.canClaim()) return alert("You can only claim 2 plots per Garden")
    if(!this.auth.getuser()) return alert('You must be logged in to claim a plot')
    this.firestore.claimPlot(this.plot.id, this.auth.getuser()?.uid as string, this.auth.getuser()?.displayName as string).then(() => {
      window.alert('Plot claimed')
    })
  }


  async canClaim(){
    let count = 0;
    const array = await firstValueFrom(this.firestore.getPlots(this.gadenID.currentId))
    array.forEach((value)=>{
      if (value.userId === this.auth.getuser()?.uid){
        count++
      }
    })

    return count < 2
  }
  url:string = DEFAULT_GARDEN_URL

  
    
  
  ngAfterViewInit(): void {
    this.verifyImage()
  }



  verifyImage(){
    const storage = getStorage();
    const reference = ref(storage, `images/${this.gadenID.currentId}/${this.plot.id}`);
    getDownloadURL(reference).then((url)=>{
      this.url = url
    }).catch(error=>{
      this.url = DEFAULT_GARDEN_URL
    })
  }

  uploadFile(input: HTMLInputElement) {
    if (!input.files) return
      const store = getStorage()
      const files: FileList = input.files;

      for (let i = 0; i < files.length; i++) {
          const file = files.item(i);
          if (file) {
              const storageRef = ref(store, `images/${this.gadenID.currentId}/${this.plot.id}`);
              const upload = uploadBytesResumable(storageRef, file);
              upload.then(()=>{
                this.verifyImage()
              })
          }
      }
      
    }
}
