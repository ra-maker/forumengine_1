import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.scss']
})
export class AIComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  AI()
  {
    this.router.navigate(['login']);
  }

}
