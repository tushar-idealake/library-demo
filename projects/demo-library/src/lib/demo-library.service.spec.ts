import { TestBed } from '@angular/core/testing';

import { DemoLibraryService } from './demo-library.service';

describe('DemoLibraryService', () => {
  let service: DemoLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
