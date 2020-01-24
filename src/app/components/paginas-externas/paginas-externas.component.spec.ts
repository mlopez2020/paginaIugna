import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginasExternasComponent } from './paginas-externas.component';

describe('PaginasExternasComponent', () => {
  let component: PaginasExternasComponent;
  let fixture: ComponentFixture<PaginasExternasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginasExternasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginasExternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
