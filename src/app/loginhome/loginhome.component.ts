import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginhome',
  templateUrl: './loginhome.component.html',
  styleUrls: ['./loginhome.component.scss']
})
export class LoginhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
networking1()
{
  this.router.navigate(['networking1'])
}
datastructure1()
{
  this.router.navigate(['datastructure1'])
}
AI1(){
  this.router.navigate(['ai1'])
}
database1(){
  this.router.navigate(['database1'])
}
postingcomments()
{
  this.router.navigate(['postingcomments'])
}
logout(){

  this.router.navigate(['/'])
  }

}
