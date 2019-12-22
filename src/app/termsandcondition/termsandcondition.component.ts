import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termsandcondition',
  templateUrl: './termsandcondition.component.html',
  styleUrls: ['./termsandcondition.component.scss']
})
export class TermsandconditionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

back2(){
  this.router.navigate(['login'])
}
  

}
