import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewedComponent } from './reviewed.component';

describe('ReviewedComponent', () => {
  let component: ReviewedComponent;
  let fixture: ComponentFixture<ReviewedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
