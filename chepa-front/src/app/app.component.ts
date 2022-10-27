import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chepa-front';

  constructor(
    private api:GetApiService
  ) {}

  ngOnInit() {
    // this.api.apiCallTest().subscribe((data)=>{
    //   console.warn("get api data", data);
    // })
    //
    // this.api.getAgeBasedOnName("Quentin").subscribe((data)=>{
    //   console.warn("Age based on name : " + name, data);
    // })
  }
}
