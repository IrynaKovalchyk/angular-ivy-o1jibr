import { Component, VERSION } from '@angular/core';
import { environment } from './app/environments/environment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'Main page';
  url = environment.apiUrl;                                 
  

  ngOnInit() {
    console.log(this.url);
  }
}




