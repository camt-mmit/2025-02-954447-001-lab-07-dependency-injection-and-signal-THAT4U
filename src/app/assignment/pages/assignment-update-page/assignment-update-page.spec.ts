import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentUpdatePage } from './assignment-update-page';

describe('AssignmentUpdatePage', () => {
  let component: AssignmentUpdatePage;
  let fixture: ComponentFixture<AssignmentUpdatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentUpdatePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentUpdatePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
