import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app-service';
import {devResponse} from '../../model/devResponse';
import {HandleResponse} from '../../model/handleResponse';
import {AppHelper} from '../../helper/app-helper';

@Component({
  selector: 'app-developers-page',
  templateUrl: './developers-page.component.html',
  styleUrls: ['./developers-page.component.css']
})
export class DevelopersPageComponent implements OnInit {
erorrMessage;
successMessage;
devResponse:devResponse;
proResponse:HandleResponse[];
userHandle:any;


  constructor(private appservice:AppService) { }

  ngOnInit() {
    this.getallProfile();
    this.dogetHandle();
  }
  getallProfile(){
    this.appservice.get('/profile/all')
      .subscribe(res=>{
    console.log("profiles",res);
        if (res.status){
          this.devResponse=res.data.profiles;

        }
      },
        error=>{
        console.log(error)
        }
        )

  }

 /* doGetbyHandle(){
    this.appservice.get("/profile/handle/:handle")
      .subscribe(res=>{
        console.log(res);
        if (res.status){
          this.devResponse=res.data.profile
        }
      })
  }*/

  dogetHandle(){
    this.appservice.get('/profile/handle/:handle')
      .subscribe(res=>{
        console.log(res);
        if (res.status){
          this.proResponse=res.data.profile;
          window.location.href="oneProfile";
        }
      })
  }


}
