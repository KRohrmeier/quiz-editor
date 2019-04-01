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
        numberofquestions: 3
      },
      {
        name: 'Quiz 2',
        numberofquestions: 8
      },
      {
        name: 'Quiz 3',
        numberofquestions: 0
      }
    ];
  }
}
