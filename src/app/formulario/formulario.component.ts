import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CazasService } from '../cazas.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  avionForm: FormGroup;

  constructor(private fb: FormBuilder, private cazasService: CazasService) {
    this.avionForm = this.fb.group({
      id: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      nombre: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      anoFabricacion: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      descripcion: ['', [Validators.required]]
    });

  }

  onSubmit() {
    if (this.avionForm.valid) {
      const avion = this.avionForm.value;
      this.cazasService.createCaza(avion).subscribe(
        (data) => {
          console.log('Avión creado:', data);
          alert('Avión creado: ' + JSON.stringify(data, null, 2));
          this.avionForm.reset(); // Reiniciar el formulario después de enviarlo
        },
        (error) => {
          console.error('Error al crear el avión:', error);
          alert('Error al crear el avión: ' + JSON.stringify(error, null, 2));
        }
      )
      // console.log('Avión cargado:', avion);
      // alert('Avión cargado: ' + JSON.stringify(avion, null, 2));
    }
  }
}
