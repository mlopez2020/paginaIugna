import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblioEscusuperComponent } from './biblio-escusuper.component';

describe('BiblioEscusuperComponent', () => {
  let component: BiblioEscusuperComponent;
  let fixture: ComponentFixture<BiblioEscusuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiblioEscusuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiblioEscusuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
