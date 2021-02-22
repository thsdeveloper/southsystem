import { TestBed } from '@angular/core/testing';

import { DragaoService } from './dragao.service';

describe('DragaoService', () => {
  let service: DragaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
