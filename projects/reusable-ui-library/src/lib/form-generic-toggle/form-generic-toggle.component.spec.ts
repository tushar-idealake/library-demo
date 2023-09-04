import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGenericToggleComponent } from './form-generic-toggle.component';

describe('FormGenericToggleComponent', () => {
  let component: FormGenericToggleComponent;
  let fixture: ComponentFixture<FormGenericToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormGenericToggleComponent]
    });
    fixture = TestBed.createComponent(FormGenericToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
