import { ComponentFixture, TestBed } from '@angular/core/testing';

import { formComponent } from './form.component';

describe('formComponent', () => {
  let component: formComponent;
  let fixture: ComponentFixture<formComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [formComponent]
    });
    fixture = TestBed.createComponent(formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
