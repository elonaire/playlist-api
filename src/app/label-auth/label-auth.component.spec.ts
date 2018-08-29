import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelAuthComponent } from './label-auth.component';

describe('LabelAuthComponent', () => {
  let component: LabelAuthComponent;
  let fixture: ComponentFixture<LabelAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
