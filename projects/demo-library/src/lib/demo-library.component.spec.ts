import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLibraryComponent } from './demo-library.component';

describe('DemoLibraryComponent', () => {
  let component: DemoLibraryComponent;
  let fixture: ComponentFixture<DemoLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoLibraryComponent]
    });
    fixture = TestBed.createComponent(DemoLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
