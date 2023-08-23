import { TestBed } from '@angular/core/testing';

import { NgLinkifyService } from './ng-linkify.service';

describe('NgLinkifyService', () => {
  let service: NgLinkifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgLinkifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
