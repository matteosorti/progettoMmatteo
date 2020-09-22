import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquistatoComponent } from './acquistato.component';

describe('AcquistatoComponent', () => {
  let component: AcquistatoComponent;
  let fixture: ComponentFixture<AcquistatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquistatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquistatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
