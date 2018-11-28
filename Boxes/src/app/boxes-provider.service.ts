import { Injectable } from '@angular/core';
import {BoxInfo} from "./models/BoxInfo.model";
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BoxesProviderService {

  data: BoxInfo[];

  constructor() {
    this.data = [
      {id: 1, title: 'Box 1'},
      {id: 2, title: 'Box 2'},
      {id: 3, title: 'Box 3'},
    ];
  }

  getBoxes(): Observable<BoxInfo[]> {
    return of(this.data).pipe(delay(5000));
  }
}
