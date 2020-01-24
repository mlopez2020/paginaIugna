import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGhostComponent } from './header-ghost.component';

describe('HeaderGhostComponent', () => {
  let component: HeaderGhostComponent;
  let fixture: ComponentFixture<HeaderGhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderGhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
