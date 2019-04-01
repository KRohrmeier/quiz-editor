import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-editor';

  myWidth = 250;

  alterWidth = () => {
    this.myWidth *= 1.20;
  }

  get titleColor(){
    return this.myWidth > 250 ? "brown" : "black";
  }
    }
