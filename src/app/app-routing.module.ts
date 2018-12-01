import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LandingComponent} from './components/landing/landing.component';
import {SingupComponent} from './components/singup/singup.component';
import {DashBoardComponent} from './components/dash-board/dash-board.component';
import {CreateYourProfileComponent} from './components/create-your-profile/create-your-profile.component';
import {CreateExperienceComponent} from './components/create-experience/create-experience.component';
import {CreateEducationComponent} from './components/create-education/create-education.component';
import {PostComponent} from './components/post/post.component';
import {DevelopersPageComponent} from './components/developers-page/developers-page.component';
import {ProfileComponent} from './components/profile/profile.component';


const routes: Routes = [
  {
    path: "",
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: "home",
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: LandingComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component:SingupComponent
  },
  {
    path: "dash-Board",
    component:DashBoardComponent
  },
  {
    path:"create-Profile",
    component: CreateYourProfileComponent
  },
  {
    path:"add-Experience",
    component:CreateExperienceComponent
  },
  {
    path:"addEducation",
    component:CreateEducationComponent
  },
  {
    path:"post",
    component:PostComponent
  },
  {
    path:"developers",
    component:DevelopersPageComponent
  },
  {
    path:"oneProfile",
    component:ProfileComponent
  }

];

export const AppRouting = RouterModule.forRoot(routes, {useHash: false});
