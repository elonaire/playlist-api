import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissedComponent } from './missed.component';

describe('MissedComponent', () => {
  let component: MissedComponent;
  let fixture: ComponentFixture<MissedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
