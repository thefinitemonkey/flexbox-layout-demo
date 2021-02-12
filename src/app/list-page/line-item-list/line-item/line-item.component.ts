import { Component, OnInit, Input } from '@angular/core';
import { LineItemModel } from '../line-item-model';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnInit {
  @Input() item!: LineItemModel;
  @Input() last: boolean = false;
  @Input() first: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
