import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NetworkingComponent } from './networking/networking.component';
import { FormsModule }    from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { DatabaseComponent } from './database/database.component';
import { DatastructuresComponent } from './datastructures/datastructures.component';
import { AIComponent } from './ai/ai.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { Networking1Component } from './networking1/networking1.component';
import { Ai1Component } from './ai1/ai1.component';
import { Datastructure1Component } from './datastructure1/datastructure1.component';
import { Database1Component } from './database1/database1.component';
import { PostingcommentsComponent } from './postingcomments/postingcomments.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    NetworkingComponent,
    SignupComponent,
    LoginComponent,
    LoginhomeComponent,
    DatabaseComponent,
    DatastructuresComponent,
    AIComponent,
    TermsandconditionComponent,
    Networking1Component,
    Ai1Component,
    Datastructure1Component,
    Database1Component,
    PostingcommentsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
