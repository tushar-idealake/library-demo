import { TestBed } from '@angular/core/testing';

import { ReusableUILibraryService } from './reusable-ui-library.service';

describe('ReusableUILibraryService', () => {
  let service: ReusableUILibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReusableUILibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
