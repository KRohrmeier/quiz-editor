import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-editor';
  titleColor = "brown";
  myWidth = 250;

  alterWidth = () => {
    this.myWidth *= 1.20;
  }
}
