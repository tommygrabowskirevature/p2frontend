import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header-user-dashboard',
  templateUrl: './header-user-dashboard.component.html',
  styleUrls: ['./header-user-dashboard.component.scss'],
})
export class HeaderUserDashboardComponent implements OnInit {
  ngOnInit(): void {}

  title: string = 'Lint';

  constructor(private titleService: Title, public _router: Router) {}

  setDocTitle(title: string) {
    console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle(title);
  }
}
