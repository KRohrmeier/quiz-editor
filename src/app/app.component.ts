import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-editor';
  // titleColor = "pink";
  
  myWidth = 280;

  get titleColor() {
    return this.myWidth > 250 ? "pink" : "black";
  }

  increaseWidth = () => {
    this.myWidth *= 2.2;
  }
}
