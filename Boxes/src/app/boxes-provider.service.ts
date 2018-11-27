import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoxesProviderService {

  constructor() { }

  getBoxes() {
    return [
      {id: 1, title: 'Box 1'},
      {id: 2, title: 'Box 2'},
      {id: 3, title: 'Box 3'},
    ];
  }
}
