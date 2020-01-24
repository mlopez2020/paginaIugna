import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadImportanteComponent } from './novedad-importante.component';

describe('NovedadImportanteComponent', () => {
  let component: NovedadImportanteComponent;
  let fixture: ComponentFixture<NovedadImportanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovedadImportanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovedadImportanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
