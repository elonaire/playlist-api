import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToreviewComponent } from './toreview.component';

describe('ToreviewComponent', () => {
  let component: ToreviewComponent;
  let fixture: ComponentFixture<ToreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
