import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-networking',
  templateUrl: './networking.component.html',
  styleUrls: ['./networking.component.scss']
})
export class NetworkingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  log()
  {
    this.router.navigate(['login']);
  }

}
