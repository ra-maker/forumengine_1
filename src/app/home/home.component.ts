import { Component, OnInit } from '@angular/core';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  aboutus()
  {
    this.router.navigate(['about']);
  }
  networking(){
    this.router.navigate(['networking'])
  }
  datastructure()
  {
    this.router.navigate(['datastructure'])
  }
  database()
  {
    this.router.navigate(['database'])
  }
  AI(){
    this.router.navigate(['AI'])
  }
  Contactus(){
    this.router.navigate(['Contactus'])
  }


}
