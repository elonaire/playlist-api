import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAuthComponent } from './artist-auth.component';

describe('ArtistAuthComponent', () => {
  let component: ArtistAuthComponent;
  let fixture: ComponentFixture<ArtistAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
