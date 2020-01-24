import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclosInscripcionComponent } from './ciclos-inscripcion.component';

describe('CiclosInscripcionComponent', () => {
  let component: CiclosInscripcionComponent;
  let fixture: ComponentFixture<CiclosInscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiclosInscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclosInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
