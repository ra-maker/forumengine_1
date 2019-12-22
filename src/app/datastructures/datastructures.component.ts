import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datastructures',
  templateUrl: './datastructures.component.html',
  styleUrls: ['./datastructures.component.scss']
})
export class DatastructuresComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  log1(){
    this.router.navigate(['login'])
  }

}
