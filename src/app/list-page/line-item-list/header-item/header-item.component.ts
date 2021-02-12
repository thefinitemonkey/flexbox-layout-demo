import { Component, Input, OnInit } from '@angular/core';
import { LineItemListHeaderModel } from '../line-item-list-header-model';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent implements OnInit {
  @Input() header!: LineItemListHeaderModel;
  constructor() { }

  ngOnInit(): void {
  }

}
