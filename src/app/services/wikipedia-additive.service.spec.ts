import { TestBed } from '@angular/core/testing';

import { WikipediaAdditiveService } from './wikipedia-additive.service';

describe('WikipediaAdditiveService', () => {
  let service: WikipediaAdditiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikipediaAdditiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
