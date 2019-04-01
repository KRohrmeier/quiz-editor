import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  ////////////
  // Just a simple mockup - real data will come from a webservice
  ////////////
  getQuizzes() {
    return [
      { name: 'Quiz 1', numberOfQuestions: 3 }
      , { name: 'Quiz 2', numberOfQuestions: 0 }
      , { name: 'Quiz 3', numberOfQuestions: 0 }
    ]
  }
}
