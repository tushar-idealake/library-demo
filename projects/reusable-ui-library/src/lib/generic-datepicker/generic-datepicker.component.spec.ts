import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GenericdatepickerComponent } from './generic-datepicker.component';

describe('GenericdatepickerComponent', () => {
  let component: GenericdatepickerComponent;
  let fixture: ComponentFixture<GenericdatepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericdatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericdatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
