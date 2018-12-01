import {Component, OnInit} from '@angular/core';
import {Education} from '../../model/education';
import {NgForm} from '@angular/forms';
import {AppService} from '../../services/app-service';
import {AppHelper} from '../../helper/app-helper';

@Component({
  selector: 'app-create-education',
  templateUrl: './create-education.component.html',
  styleUrls: ['./create-education.component.css']
})
export class CreateEducationComponent implements OnInit {
  education: Education = new Education();
  errorMessage;
  successMessage;
  loading = false;
token;
  constructor(private appservice: AppService) {
  }

  ngOnInit() {
    this.token = AppHelper.retrieve("token");
    console.log(this.token);
  }

  doAddEducaton(educationForm: NgForm) {
    console.log(this.education);
    if (!this.doValidation()) {
      return
    }
    this.loading = true;
    this.appservice.post('/profile/education', this.education,this.token)
      .subscribe(res => {
          this.loading = false;
          if (res.status === true) {
            educationForm.reset();
            this.successMessage = res.message;
            window.location.href = 'dash-Board';
          }

        },
        error => {
          this.errorMessage = error.error.message;
        });
  }

  doValidation(): boolean {
    if (this.education.school === undefined || this.education.school=== null || this.education.school===""){
      this.errorMessage="school field can not empty";
      return false;
    } 
    if (this.education.degree === undefined || this.education.degree=== null || this.education.degree===""){
      this.errorMessage="degree field can not empty ";
      return false;
    }
    if (this.education.fieldOfStudy === undefined || this.education.fieldOfStudy=== null || this.education.fieldOfStudy=== ""){
      this.errorMessage="fieldOfStudy is can not be empty";
      return false;
    }
    /*if (this.education.description ===undefined || this.education.description ===null || this.education.description=== ""){
      this.errorMessage = "description is can not empty";
    return false;
    }*/
    if (this.education.current === undefined || this.education.current === null){
      this. errorMessage= 'current box is required';
    return false;
    }
    if (this.education.from=== undefined) {
      this.errorMessage="from date is required";
    return false
    }
    if (this.education.to=== undefined) {
      this.errorMessage="to date is required";
    return false
    }

    return true

  }


}
