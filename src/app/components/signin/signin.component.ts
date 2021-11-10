import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  users: User[] = [];

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
    console.log("I'm inside of OnInit of User component");
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }
}
