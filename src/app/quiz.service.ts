import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuizzes()
  {
    return [
      {name: 'quiz 1', numQuestions: 3},
      {name: 'quiz 2', numQuestions: 0},
      {name: 'quiz 3', numQuestions: 0}
    ];
  }
}
