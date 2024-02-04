import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GardenIdService {
  currentId: string = ''
  constructor() { }
}
