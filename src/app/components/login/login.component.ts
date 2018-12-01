import { Component, OnInit } from '@angular/core';
import {Login} from '../../model/login';
import {NgForm} from '@angular/forms';
import {AppService} from '../../services/app-service';
import {AppHelper} from '../../helper/app-helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  loading = false;
  errorMessage;
  successMessage;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  doLogin(loginForm: NgForm) {

    console.log("login", this.login);
    if (!this.doValidation()) {
      return;
    }

    this.loading = true;

    this.appService.post("/users/login", this.login)
      .subscribe(res => {
        console.log("res:", res);
        this.loading = false;

        if (res.status === true) {
          loginForm.reset();
          this.successMessage = res.message;
          AppHelper.store("token",res.data.token);
          AppHelper.store("userInfo", res.data.user);
          window.location.href="dash-Board";



        }

      }, error => {
        console.log(error);
        this.errorMessage = error.error.message
      })

  }


  doValidation() : boolean {
    if (this.login.email === undefined || this.login.email === null || this.login.email === "") {
      this.errorMessage = "Email field cannot be empty";
      return false;
    }
    if (this.login.password === undefined || this.login.password === null || this.login.password === "") {
      this.errorMessage = "Password field cannot be empty";
      return false;
    }

    return true;

  }
}
