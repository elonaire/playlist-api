import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDashComponent } from './artist-dash.component';

describe('ArtistDashComponent', () => {
  let component: ArtistDashComponent;
  let fixture: ComponentFixture<ArtistDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
