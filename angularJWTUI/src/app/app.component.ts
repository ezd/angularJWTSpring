import { Component } from '@angular/core';
import { MediaObserver, MediaChange} from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showsidenave:boolean;
  title = 'angularJWTUI';
  mediaSub:Subscription;
  constructor(public mediaObserver:MediaObserver){}

  ngOnInit(){
    this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      // console.log(result.mqAlias);
      this.showsidenave = result.mqAlias ==='xs' ? false :true;
      
    })
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
    
  }

}

