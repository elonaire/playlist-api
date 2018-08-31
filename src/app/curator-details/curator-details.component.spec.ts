import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratorDetailsComponent } from './curator-details.component';

describe('CuratorDetailsComponent', () => {
  let component: CuratorDetailsComponent;
  let fixture: ComponentFixture<CuratorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
