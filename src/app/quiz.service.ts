import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  // Mock up quiz service
  getQuizzes() {
    return [
      {
        name: 'Quiz 1',
        numberOfQuestions: 3
      },
      {
        name: 'Quiz 2',
        numberOfQuestions: 8
      },
      {
        name: 'Quiz 3',
        numberOfQuestions: 0
      }
    ];
  }
}
