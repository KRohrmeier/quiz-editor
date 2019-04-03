import { Component } from '@angular/core';
import { QuizService } from './quiz.service';

interface QuizDisplay {
  name: String;
  numberOfQuestions: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private quizSvc: QuizService) {
      console.log(this.quizSvc.getQuizzes());
      this.quizzes = this.quizSvc.getQuizzes();
  }
  
  title = 'quiz-editor';

  myWidth = 250;

  quizzes: QuizDisplay[] = [];
  selectedQuiz: QuizDisplay = undefined;

  setSelectedQuiz(q: QuizDisplay) {
    this.selectedQuiz = q;
  }

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
