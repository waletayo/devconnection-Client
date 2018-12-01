import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app-service';
import {Post} from '../../model/post';
import {AppHelper} from '../../helper/app-helper';
import {NgForm} from '@angular/forms';
import {PostResponse} from '../../model/post-response';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post = new Post();
  loading = false;
  errorMessage;
  successMessage;
  token;
  userInfo: any;
  postResponse: PostResponse[];

  constructor(private appservice: AppService) {
  }

  ngOnInit() {
    this.token = AppHelper.retrieve('token');
    this.userInfo = AppHelper.retrieve('userInfo');
    this.getAllPost();
    console.log(this.token);
  }

  doPost(addPostForm: NgForm) {
    this.loading = true;
    this.post.user = this.userInfo._id;
    this.appservice.post('/post/', this.post, this.token)
      .subscribe(res => {
        this.loading = false;
        if (res.status === true) {
          addPostForm.reset();
          this.successMessage = res.message;
          window.location.reload();
        }
      }, error => {
        this.errorMessage = error.error.message;
      });

  }

  getAllPost() {
    this.loading = false;
    this.appservice.get('/post/', this.token).subscribe(res => {
      this.loading = false;
      console.log('res:', res);

      this.postResponse = res;
      if (res.status) {


      }

    }, err => {
      console.log('err:', err);
    });
  }


  doLike(){
    this.appservice.post("/post/like/:id",this.token)
      .subscribe(res=>{
        if (res.status===true){
          console.log("response", res);
          this.successMessage=res.message
        }

      })
  }



}
