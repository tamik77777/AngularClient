import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTreatmentComponent } from './all-treatment.component';

describe('AllTreatmentComponent', () => {
  let component: AllTreatmentComponent;
  let fixture: ComponentFixture<AllTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTreatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
