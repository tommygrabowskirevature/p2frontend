import { Component, OnInit } from '@angular/core';
import { Bills } from 'src/app/bills';
import { BillService } from 'src/app/bills.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent implements OnInit {
  bills: Bills[] = [];

  constructor(public billService: BillService) {}

  ngOnInit(): void {
    this.getBills();
    console.log("I'm inside OnInit of Bill Component");
  }
  getBills(): void {
    this.billService.getBills().subscribe((bills) => (this.bills = bills));
  }
}
