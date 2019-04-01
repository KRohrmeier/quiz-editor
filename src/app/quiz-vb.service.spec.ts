import { TestBed } from '@angular/core/testing';

import { QuizVBService } from './quiz-vb.service';

describe('QuizVBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizVBService = TestBed.get(QuizVBService);
    expect(service).toBeTruthy();
  });
});
