import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGenericInputComponent } from './form-generic-input.component';

describe('FormGenericInputComponent', () => {
  let component: FormGenericInputComponent;
  let fixture: ComponentFixture<FormGenericInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormGenericInputComponent]
    });
    fixture = TestBed.createComponent(FormGenericInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
