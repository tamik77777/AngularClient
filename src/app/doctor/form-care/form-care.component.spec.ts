import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCareComponent } from './form-care.component';

describe('FormCareComponent', () => {
  let component: FormCareComponent;
  let fixture: ComponentFixture<FormCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
