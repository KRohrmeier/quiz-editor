import { Component } from '@angular/core';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   *
   */
  constructor(private quiz_svc: QuizService) {
    console.log(this.quiz_svc.getQuizzes);
  }

  title = 'quiz-editor';
  myWidth = 250;

  get titleColor(){
    return "indianred";
  }

  get listBackgroundColor(){
    return this.myWidth > 100 ? true : false;
  }

  increaseWidth = () => {
    this.myWidth = (this.myWidth + 2) % 250;
  }

}
