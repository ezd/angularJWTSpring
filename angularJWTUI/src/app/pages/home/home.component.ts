import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }

  onToResource1(){
// this.activatedRouter.
this.router.navigate(['/Resource1'])
  }

}
