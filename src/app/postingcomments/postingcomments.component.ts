import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postingcomments',
  templateUrl: './postingcomments.component.html',
  styleUrls: ['./postingcomments.component.scss']
})
export class PostingcommentsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  postcomment()
  {
    alert("Your comment is succesfully posted!! Thanks for your time");

    this.router.navigate(['loginhome'])
  }
  
}
