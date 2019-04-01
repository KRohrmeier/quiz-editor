import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quiz Editor';
  myWidth = 300;
  
  get listBackgroundColorDanger() {
    return this.myWidth > 300 ? true : false;
  }

  get titleColor() {

    return this.myWidth > 250 ? "pink" : "black";
  } 
  

  increaseWidth = () => this.myWidth *= 1.2;

  reduceWidth = () => this.myWidth *= .8;
}
