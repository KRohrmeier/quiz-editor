import { Component } from '@angular/core';
import { QuizService } from './quiz.service';

interface QuizDisplay {
  name: string;
  numberOfQuestions: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-editor';
  quizzes: QuizDisplay[] = [];
  selectedQuiz: QuizDisplay = undefined;

  constructor(private quizSvc: QuizService) {
    this.quizzes = this.quizSvc.getQuizzes();
  }

  setSelectedQuiz(quiz: QuizDisplay) {
    this.selectedQuiz = quiz;
  }

  addNewQuiz() {
    let newQuiz = { name: 'Untitled Quiz', numberOfQuestions: 0 };

    this.quizzes = [...this.quizzes, newQuiz];
    this.selectedQuiz = newQuiz;
  }
}
