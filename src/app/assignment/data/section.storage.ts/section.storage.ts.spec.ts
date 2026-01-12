import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStorage } from './section.storage.ts';

describe('SectionStorageTs', () => {
  let component: SectionStorage;
  let fixture: ComponentFixture<SectionStorage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionStorage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionStorage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
