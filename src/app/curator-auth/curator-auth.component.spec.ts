import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratorAuthComponent } from './curator-auth.component';

describe('CuratorAuthComponent', () => {
  let component: CuratorAuthComponent;
  let fixture: ComponentFixture<CuratorAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratorAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratorAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
