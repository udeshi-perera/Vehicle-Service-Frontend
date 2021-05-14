import { TestBed } from '@angular/core/testing';

import { NotoficationService } from './notofication.service';

describe('NotoficationService', () => {
  let service: NotoficationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotoficationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
