import { Component, OnInit } from '@angular/core';
import { LineItemModel } from './line-item-model';
import { LineItemListHeaderModel } from './line-item-list-header-model';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.scss']
})
export class LineItemListComponent implements OnInit {
  header: LineItemListHeaderModel = {
    id: "ID", client: "Client", status: "Status", date: "Date", amount: "Amount"
  }
  
  items: LineItemModel[] = [
    {'id': 1, 'client': 'ABC Client', 'status': 'Approved', 'date': new Date(), 'amount': (1000 * Math.random()).toFixed(2) },
    {'id': 2, 'client': '123 Client', 'status': 'Approved', 'date': new Date(), 'amount': (1000 * Math.random()).toFixed(2) },
    {'id': 3, 'client': 'DEF Client', 'status': 'Declined', 'date': new Date(), 'amount': (1000 * Math.random()).toFixed(2) },
    {'id': 4, 'client': '456 Client', 'status': 'Approved', 'date': new Date(), 'amount': (1000 * Math.random()).toFixed(2) },
    {'id': 5, 'client': 'GHI Client', 'status': 'Mystery', 'date': new Date(), 'amount': (1000 * Math.random()).toFixed(2) },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
