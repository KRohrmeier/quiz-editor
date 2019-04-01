import { Component } from '@angular/core';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private quizSvc: QuizService) {
    this.quizzes = this.quizSvc.getQuizzes();
  }

  title = 'quiz-editor';
  quizzes = [];
}
