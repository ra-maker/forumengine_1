import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  psw:String;
    confirmpsw:String;

  constructor(private router:Router) {
   

   }

  ngOnInit() {
  }
  Reset(){
    this.router.navigate(['reset'])
  }
  Signup(){

   
  
    if(this.psw==this.confirmpsw){

      this.router.navigate(['loginhome'])

    }
    else
    {
      window.alert("password should be match")
    }
    
  }
  Terms(){
    this.router.navigate(['Terms'])
  }
}
