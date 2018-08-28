import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratorDashComponent } from './curator-dash.component';

describe('CuratorDashComponent', () => {
  let component: CuratorDashComponent;
  let fixture: ComponentFixture<CuratorDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratorDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratorDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
