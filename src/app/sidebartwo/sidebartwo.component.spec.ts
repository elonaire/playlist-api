import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebartwoComponent } from './sidebartwo.component';

describe('SidebartwoComponent', () => {
  let component: SidebartwoComponent;
  let fixture: ComponentFixture<SidebartwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebartwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebartwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
