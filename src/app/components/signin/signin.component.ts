import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signinservice } from 'src/app/signin.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  email: string = '';
  password: string = '';
  invalidLogin = false;
  user!: User;

  constructor(private router: Router, private signinService: Signinservice) {}

  ngOnInit(): void {}

  checkLogin() {
    this.getUserByEmail(this.email);
  }

  getUserByEmail(email: string): void {
    this.signinService.getUser(email).subscribe((user) => {
      this.user = user;
      console.log('this.user in arrow function :' + this.user.password);
      if (
        this.user.email === this.email &&
        this.user.password === this.password
      ) {
        this.router.navigate(['users/' + this.email]);
        this.invalidLogin = false;
      } else this.invalidLogin = true;
    });
    // console.log("this.customer =" + this.customer);
  }
}
