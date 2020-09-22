import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerzoStepComponent } from './terzo-step.component';

describe('TerzoStepComponent', () => {
  let component: TerzoStepComponent;
  let fixture: ComponentFixture<TerzoStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerzoStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerzoStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
