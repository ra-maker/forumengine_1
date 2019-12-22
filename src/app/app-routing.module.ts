import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { NetworkingComponent } from './networking/networking.component';
import { DatastructuresComponent } from './datastructures/datastructures.component';
import { DatabaseComponent } from './database/database.component';
import { AIComponent } from './ai/ai.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { Networking1Component } from './networking1/networking1.component';
import { Datastructure1Component } from './datastructure1/datastructure1.component';
import { Ai1Component } from './ai1/ai1.component';
import { Database1Component } from './database1/database1.component';
import { PostingcommentsComponent } from './postingcomments/postingcomments.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutusComponent},
  {path:'Back',component:HomeComponent},
  {path:'reset',component:SignupComponent},
  {path:'signup',component:SignupComponent},
  {path:'signup',component:LoginComponent},
  {path:'loginhome',component:LoginhomeComponent},
  {path:'login',component:LoginComponent},
  {path:'networking',component:NetworkingComponent},
  {path:'datastructure',component:DatastructuresComponent},
  {path:'database',component:DatabaseComponent},
  {path:'AI',component:AIComponent},
  {path:'Contactus',component:ContactusComponent},
  {path:'Terms',component:TermsandconditionComponent},
  {path:'networking1',component:Networking1Component},
  {path:'datastructure1',component:Datastructure1Component},
  {path:'ai1',component:Ai1Component},
  {path:'database1',component:Database1Component},
  {path:'postingcomments',component:PostingcommentsComponent},
  {path:'logout',component:LogoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
