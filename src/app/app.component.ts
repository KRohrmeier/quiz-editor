import { Component } from '@angular/core';
import { QuizVBService } from './quiz-vb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private quizSvx:QuizVBService) {
    // console.log(this.quizSvx.getQuizzes());
    this.quizzes = this.quizSvx.getQuizzes();
  }

  title = 'quiz-editor';
  // titleColor = "pink";
  quizzes = [];
  myWidth = 100;

  get titleColor() {
    return this.myWidth > 250 ? "pink" : "black";
  }

  increaseWidth = () => {
    this.myWidth *= 1.5;
  }

  get listBackgroundColorDanger() {
    return this.myWidth > 250 ? true : false;
  }
}
