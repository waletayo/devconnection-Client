import {Component, OnInit} from '@angular/core';
import {Sginup} from '../../model/sginup';
import {AppService} from '../../services/app-service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  sginup: Sginup = new Sginup();
  loading = false;
  errorMessage;
  sucessMessage;

  constructor(private appservice: AppService, private router: Router) {
  }

  ngOnInit() {

  }

  doRegister(registerForm: NgForm) {
    if (!this.doValidation()) {
      return;
    }
    this.loading = true;

    this.appservice.post('/users/register', this.sginup)
      .subscribe(res => {
        console.log(res);
          this.loading = false;
          if (res.status === true) {
            registerForm.reset();
            this.sucessMessage = res.message;
            window.location.href="login";
          }
        },
        error => {
          this.errorMessage = error.error.message;
        });

  }

  doValidation(): boolean {

    if (this.sginup.name === undefined || this.sginup.name === null || this.sginup.name === '') {
      this.errorMessage = 'Name field cant be empty';
      return false;
    }
    if (this.sginup.email === undefined || this.sginup.email === null || this.sginup.email === '') {
      this.errorMessage = 'email field cant be empty';
      return false;
    }
    if (this.sginup.password === undefined || this.sginup.password === null || this.sginup.password === '') {
      this.errorMessage = 'password field cant be empty';
      return false;
    }
    if (this.sginup.password2 !== this.sginup.password) {
      this.errorMessage = 'password must match';
      return false;
    }
    return true;
  }

}





