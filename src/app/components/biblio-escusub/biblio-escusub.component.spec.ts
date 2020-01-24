import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblioEscusubComponent } from './biblio-escusub.component';

describe('BiblioEscusubComponent', () => {
  let component: BiblioEscusubComponent;
  let fixture: ComponentFixture<BiblioEscusubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiblioEscusubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiblioEscusubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
