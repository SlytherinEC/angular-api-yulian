import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEdicionComponent } from './formulario-edicion.component';

describe('FormularioEdicionComponent', () => {
  let component: FormularioEdicionComponent;
  let fixture: ComponentFixture<FormularioEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEdicionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
