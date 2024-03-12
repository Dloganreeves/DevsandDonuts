import { TestBed } from '@angular/core/testing';

import { ShareDonutService } from './share-donut.service';

describe('ShareDonutService', () => {
  let service: ShareDonutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareDonutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
