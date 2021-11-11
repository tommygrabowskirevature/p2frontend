import { Component, OnInit } from '@angular/core';
import { Transactions } from '../transactions';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactions: Transactions[] = [];

  constructor(public transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.getTransactions();
    console.log("I'm inside OnInit of Transaction Component");
  }
  getTransactions(): void {
    this.transactionsService
      .getTransactions()
      .subscribe((transactions) => (this.transactions = transactions));
  }
}
