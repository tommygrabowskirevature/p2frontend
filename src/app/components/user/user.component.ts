import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[] = [];

  email!: string;
  user!: User;

  constructor(
    public userService: UserService,
    private actRoute: ActivatedRoute
  ) {
    this.email = this.actRoute.snapshot.params['email'];
  }

  ngOnInit(): void {
    if (this.email == null) this.getUsers();
    else this.getUser(this.email);
    console.log("I'm inside OnInit of User Component");
  }
  getUsers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  getUser(email: string): void {
    this.userService.getUser(email).subscribe((user) => {
      this.user = user;
      console.log('test :' + email);
    });
  }
}
