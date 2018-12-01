import { Component, OnInit } from '@angular/core';
import {addProfile} from '../../model/addProfile';
import {AppService} from '../../services/app-service';
import {NgForm} from '@angular/forms';
import {error} from 'util';
import {AppHelper} from '../../helper/app-helper';

@Component({
  selector: 'app-create-your-profile',
  templateUrl: './create-your-profile.component.html',
  styleUrls: ['./create-your-profile.component.css']
})
export class CreateYourProfileComponent implements OnInit {

  addProfile :addProfile=new addProfile();
  loading =false;
  errorMessage;
  sucessMessage;
  token;
  constructor(private appservice :AppService) { }

  ngOnInit() {

    this.token = AppHelper.retrieve("token");
    console.log(this.token);
  }


  doAddProfile(addProfileForm : NgForm){
    console.log(this.addProfile);
    if (!this.doValidation()){
      return;
    }
    this.loading=false;
    this.appservice.post('/profile/',this.addProfile, this.token)
      .subscribe(res =>{
        this.loading=false;
        if (res.status ===true){
          addProfileForm.reset();
          this.sucessMessage=res.message;
          window.location.href="add-Experience";

        }
      },
        error => {
        this.errorMessage= error.error.message
        });

  }
  doValidation() :boolean{

    if (this.addProfile.handle === undefined || this.addProfile.handle === null || this.addProfile.handle === '') {
      this.errorMessage = 'handle field cant be empty';
      return false;
    }
    if(this.addProfile.website === undefined || this.addProfile.website === null || this. addProfile.website === '') {
       this.errorMessage = 'website field cant be empty';
}
  if (this.addProfile.company === undefined || this.addProfile.company === null || this. addProfile.company === '') {
      this.errorMessage = 'company field cant be empty';
      return false;
    }
    if (this.addProfile.bio === undefined || this.addProfile.bio === null || this.addProfile.bio === '') {
      this.errorMessage = 'bio field cant be empty';
      return false;
    }
    if (this.addProfile.location === undefined || this.addProfile.location === null || this.addProfile.location === '') {
      this.errorMessage = 'location  field cant be empty';
      return false;
    }
    if (this.addProfile.status === undefined || this.addProfile.status === null || this.addProfile.status === '') {
      this.errorMessage = 'status field cant be empty';
      return false;
    }
    if (this.addProfile.skill === undefined || this.addProfile.skill === null || this.addProfile.skill === '') {
      this.errorMessage = 'skill field cant be empty';
      return false;
    }
    if (this.addProfile.bio === undefined || this.addProfile.bio === null || this.addProfile.bio === '') {
      this.errorMessage = 'bio field cant be empty';
      return false;
    }
    if (this.addProfile.github === undefined || this.addProfile.github === null || this.addProfile.github === '') {
      this.errorMessage = 'github field cant be empty';
      return false;
    }
    if (this.addProfile.youtube === undefined || this.addProfile.youtube === null || this.addProfile.youtube === '') {
      this.errorMessage = 'youtube field cant be empty';
      return false;
    }
    if (this.addProfile.twitter === undefined || this.addProfile.twitter === null || this.addProfile.twitter === '') {
      this.errorMessage = 'twitter field cant be empty';
      return false;
    }
    if (this.addProfile.facebook === undefined || this.addProfile.facebook=== null || this.addProfile.facebook === '') {
      this.errorMessage = 'facebook field cant be empty';
      return false;
    }
    if (this.addProfile.linkdin === undefined || this.addProfile.linkdin === null || this.addProfile.linkdin === '') {
      this.errorMessage = 'linkdin field cant be empty';
      return false;
    }
    if (this.addProfile.instagram === undefined || this.addProfile.instagram === null || this.addProfile.instagram === '') {
      this.errorMessage = 'instagram field cant be empty';
      return false;
    }
    return true;



  }
  }
