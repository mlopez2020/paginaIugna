import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejoInteruniversitarioComponent } from './consejo-interuniversitario.component';

describe('ConsejoInteruniversitarioComponent', () => {
  let component: ConsejoInteruniversitarioComponent;
  let fixture: ComponentFixture<ConsejoInteruniversitarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsejoInteruniversitarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsejoInteruniversitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
