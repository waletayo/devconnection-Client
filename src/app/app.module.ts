import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import {AppRouting} from './app-routing.module';
import {AppService} from './services/app-service';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SingupComponent} from './components/singup/singup.component';
import { CreateYourProfileComponent } from './components/create-your-profile/create-your-profile.component';
import { CreateExperienceComponent } from './components/create-experience/create-experience.component';
import { CreateEducationComponent } from './components/create-education/create-education.component';
import {PostComponent} from './components/post/post.component';
import { DevelopersPageComponent } from './components/developers-page/developers-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    ProfileComponent,
    DashBoardComponent,
    SingupComponent,
    CreateYourProfileComponent,
    CreateExperienceComponent,
    CreateEducationComponent,
    PostComponent,
    DevelopersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
