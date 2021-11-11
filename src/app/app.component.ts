import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  NavigationEnd,
  Router,
  ActivatedRoute,
  NavigationStart,
} from '@angular/router';
import { filter, map } from 'rxjs';

declare const fadeWrapper: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Lint';
  location: string = location.pathname;
  activatedRoute: any;

  fadeWrapper() {
    fadeWrapper();
  }

  constructor(private titleService: Title, public _router: Router) {}

  setDocTitle(title: string) {
    console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle(title);
  }
}
