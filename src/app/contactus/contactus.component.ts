import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

Contactus(){
  this.router.navigate(['Contactus'])
}

back1(){
  this.router.navigate(['/'])
}
}
