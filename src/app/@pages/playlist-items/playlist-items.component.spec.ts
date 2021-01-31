import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistTemsComponent } from './playlist-items.component';

describe('PlaylistTemsComponent', () => {
  let component: PlaylistTemsComponent;
  let fixture: ComponentFixture<PlaylistTemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistTemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistTemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
