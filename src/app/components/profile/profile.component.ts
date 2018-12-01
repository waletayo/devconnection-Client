import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  /*proResponse:HandleResponse[];
*/
  constructor(private appservce:AppService) { }

  ngOnInit() {
  }
 /* dogetHandle(){
    this.appservce.get('/profile/handle/:handle')
      .subscribe(res=>{
        if (res.status){
          this.proResponse=res.data.profile
        }
      })*/


}
