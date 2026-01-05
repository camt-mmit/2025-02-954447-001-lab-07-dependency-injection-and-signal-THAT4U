import { TestBed } from '@angular/core/testing';

import { ExampleDataStorage } from './example-data.storage';

describe('ExampleDataStorage', () => {
  let service: ExampleDataStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleDataStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
