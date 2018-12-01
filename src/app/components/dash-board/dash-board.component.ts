import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app-service';
import {AppHelper} from '../../helper/app-helper';
import {EResponse} from '../../model/educationResponse';
import {ExperienceResponse} from '../../model/experienceResponse';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  eResponse: EResponse[];
  token;
  expResponse:ExperienceResponse[];
  constructor(private appservice:AppService) {
  }

  ngOnInit() {
    this.token = AppHelper.retrieve('token');
    this.getUserEducation();
    this.doGetExperience();
    console.log(this.token);
  }
  getUserEducation(){
    this.appservice.get('/profile/',this.token)
      .subscribe(res=>{
        console.log("education",res);

        if (res.status){
          this.eResponse= res.data.profile.education;

        }
      },error=>{

        console.log(error)
        }

      )
  }
  doGetExperience(){
    this.appservice.get("/profile/",this.token)
      .subscribe(res=>{
        console.log("experience:",res);
        if (res.status){
          this.expResponse= res.data.profile.experience
        }
      })

  }








  doDeleteEx(){
    this.appservice.delete("/experience/exp_id",this.token).subscribe(res=>{

    })
  }




}
