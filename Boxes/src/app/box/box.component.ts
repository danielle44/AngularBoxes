import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BoxInfo} from '../models/BoxInfo.model';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Input() boxInfo: BoxInfo;
  @Output() delete: EventEmitter<BoxInfo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeMe() {
    this.delete.emit(this.boxInfo);
  }

}
