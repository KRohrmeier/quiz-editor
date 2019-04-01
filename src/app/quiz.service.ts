import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  //mocking up data we will ultimately get from REST endpoint/ web service
  getQuizzes() {
    return [
      {name: "quiz 1", numberOfQuestions: 3}
      , {name: "quiz 2", numberOfQuestions: 4}
      , {name: "quiz 3", numberOfQuestions: 0}
      , {name: "quiz 4", numberOfQuestions: 0}
    ]
  }
}
