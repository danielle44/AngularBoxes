import { Component, OnInit } from '@angular/core';
import {BoxInfo} from '../models/BoxInfo.model';
import {BoxesProviderService} from '../boxes-provider.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  boxes: BoxInfo[];
  lastBoxIndex: number;

  constructor(private boxesProvider: BoxesProviderService) {
    this.boxes = this.boxesProvider.getBoxes();
    this.lastBoxIndex = this.getCounter();
  }

  getCounter() {
    return this.boxes.length;
  }

  addNewBox() {
    this.lastBoxIndex++;
    const newBox: BoxInfo = { id: this.lastBoxIndex, title: `Box ${this.lastBoxIndex}` };
    this.boxes.push(newBox);
  }

  removeBox(boxInfo: BoxInfo) {
    this.boxes = this.boxes.filter(box => box !== boxInfo);
  }

  ngOnInit() {
  }

}
