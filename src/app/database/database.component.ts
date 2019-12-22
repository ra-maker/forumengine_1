import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  database()
  {
    this.router.navigate(['login'])
  }


}
