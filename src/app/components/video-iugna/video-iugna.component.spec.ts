import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoIugnaComponent } from './video-iugna.component';

describe('VideoIugnaComponent', () => {
  let component: VideoIugnaComponent;
  let fixture: ComponentFixture<VideoIugnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoIugnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoIugnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
