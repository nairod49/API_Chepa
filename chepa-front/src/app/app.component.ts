import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'chepa-front';
  mediaSub: Subscription | undefined;
  deviceXs!: boolean;
  constructor(public mediaObserver:MediaObserver, private api:GetApiService){}

  ngOnInit(): void {
      this.mediaSub = this.mediaObserver.asObservable().subscribe((result:MediaChange[])=>{
        console.log(result[0].mqAlias)
        this.deviceXs = result[0].mqAlias === 'xs' ? true : false;
      })
  }

  ngOnDestroy(): void {
      this.mediaSub?.unsubscribe()
  }
}
