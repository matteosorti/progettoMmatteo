import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondoStepComponent } from './secondo-step.component';

describe('SecondoStepComponent', () => {
  let component: SecondoStepComponent;
  let fixture: ComponentFixture<SecondoStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondoStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondoStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
