import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-editor';
  
  imageWidth = 200;
  get titleColor() {
    return this.imageWidth > 250 ? '#dd0031' : 'black';
  }

  increaseWidth = () => {
    this.imageWidth *= 1.5;
  }
}
