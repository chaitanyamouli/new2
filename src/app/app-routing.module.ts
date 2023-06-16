import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcom/welcome.component';
import{LoginComponent} from './login/login.component';
import{ AboutComponent} from './about/about.component';
import{ContactComponent} from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent,children:[
    {path:'faq',component:FaqComponent}
  ]},
  {path:'contact',component:ContactComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
