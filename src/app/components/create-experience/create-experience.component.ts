import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app-service';
import {NgForm} from '@angular/forms';
import {Experince} from '../../model/experience';
import {AppHelper} from '../../helper/app-helper';


@Component({
  selector: 'app-create-experience',
  templateUrl: './create-experience.component.html',
  styleUrls: ['./create-experience.component.css']
})
export class CreateExperienceComponent implements OnInit {
  experience :Experince=new Experince();
  loading=false;
  errorMessage;
  successMessage;
token;
  constructor(private appservice:AppService) { }

  ngOnInit() {
    this.token = AppHelper.retrieve("token");
   console.log(this.token);

  }

  doAddExperience(ExperienceForm:NgForm){
    console.log(this.experience);
    if (!this.doValidation()){
      return
    }
    this.loading=true;
    this.appservice.post("/profile/experience",this.experience,this.token)
      .subscribe(res=>{
        this.loading=false;
        if (res.status===true) {
          ExperienceForm.reset();
          this.successMessage=res.message;
          window.location.href="addEducation"
        }
      },
        error=>{
        this.errorMessage=error.error.message
        })

}
  doValidation() :boolean {
    if (this.experience.title===undefined || this.experience.title===null ||this.experience.title===''){
      this.errorMessage="title Field cant be empty";
      return false
    }
    if (this.experience.company===undefined || this.experience.company===null || this.experience.company===''){
      this.errorMessage="company field cant be empty";
    }
    /*if (this.experience.current===undefined){
      this.errorMessage="current must be either checked or not"
    }*/
    if (this.experience.description === undefined || this.experience.description ===null||this.experience.description===null){
      this.errorMessage= "description field is required"
    }
    if (this.experience.from=== undefined || this.experience.from===null){
      this.errorMessage="start date is required";
    }
    if (this.experience.to ===undefined || this.experience.to===null){
      this.errorMessage ="to date is required";
    }
    if (this.experience.location === undefined || this.experience.location ===null||this.experience.location===null){
      this.errorMessage= "location field is required"
    }
    return true

  }

}
