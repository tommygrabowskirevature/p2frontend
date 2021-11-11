import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/account';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  accounts: Account[] = [];

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
    this.getAccounts();
    console.log("I'm inside OnInit of Account Component");
  }
  getAccounts(): void {
    this.accountService
      .getAccounts()
      .subscribe((accounts) => (this.accounts = accounts));
  }
}
