import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keyword-highlighting-angular-frontend';


  public click(){
    console.log('Clicked native angular function!');
  }

}
