import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
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
