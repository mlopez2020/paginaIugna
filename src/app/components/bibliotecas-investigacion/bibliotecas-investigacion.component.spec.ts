import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecasInvestigacionComponent } from './bibliotecas-investigacion.component';

describe('BibliotecasInvestigacionComponent', () => {
  let component: BibliotecasInvestigacionComponent;
  let fixture: ComponentFixture<BibliotecasInvestigacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliotecasInvestigacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecasInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
