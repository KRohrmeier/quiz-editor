import { Component } from '@angular/core';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private quizSvc: QuizService) {
      console.log(this.quizSvc.getQuizzes());
  }
  
  title = 'quiz-editor';

  myWidth = 250;

  alterWidth = () => {
    this.myWidth *= 1.20;
  }

  get titleColor(){
    return this.myWidth > 250 ? "brown" : "black";
  }

  get listBackgroundColorDanger() {
    return this.myWidth > 250 ? true : false; 
  }
    }
