import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/services/back-end.service';

@Component({
  selector: 'app-resource1',
  templateUrl: './resource1.component.html',
  styleUrls: ['./resource1.component.css']
})
export class Resource1Component implements OnInit {
  
   mycontnet

  constructor(private backEndService:BackEndService) { }

  ngOnInit() {
    debugger
    this.backEndService.getResource('testing').subscribe(
      result=>{
        debugger
        this.mycontnet=result
        console.log("result is",result);
        
      },
      error=>{
        console.error("error geging")

      })
  }
  

}
