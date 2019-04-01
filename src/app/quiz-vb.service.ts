import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizVBService {

  constructor() { }

  getQuizzes() {
    return [
      {name: "Quiz 1", numberOfQuestion: 3}
      , {name: "Quiz 2", numberOfQuestion: 0}
      , {name: "Quiz 3", numberOfQuestion: 0}
    ];
  }
}
