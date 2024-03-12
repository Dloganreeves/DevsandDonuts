import { TestBed } from '@angular/core/testing';

import { ShareDevsService } from './share-devs.service';

describe('ShareDevsService', () => {
  let service: ShareDevsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareDevsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
