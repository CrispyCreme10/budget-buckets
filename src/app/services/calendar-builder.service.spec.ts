import { TestBed } from '@angular/core/testing';

import { CalendarBuilderService } from './calendar-builder.service';

describe('CalendarBuilderService', () => {
  let service: CalendarBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
