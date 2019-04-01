import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuizzes() {
    //Mocking the data we'd recieve from a REST endpoint or service call
    return [
      { name: 'Quiz 1', numberOfQuestions: 3}
      , { name: 'Quiz 2', numberOfQuestions: 0}
      , { name: 'Quiz 3', numberOfQuestions: 0}

    ]
  }
}
