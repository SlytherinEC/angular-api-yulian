import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CazasService } from '../cazas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-edicion',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './formulario-edicion.component.html',
  styleUrl: './formulario-edicion.component.css'
})
export class FormularioEdicionComponent implements OnInit {

  avionForm!: FormGroup;
  objectCaza: any = {};
  error: string = '';
  id!: String;

  constructor(private cazasService: CazasService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {}

  obtenerCaza(): void {

    // Obtén los datos del caza usando Promises
    this.cazasService.getCazaById(this.id)
      .then(caza => {
        console.log('Caza obtenido:', caza);
        // Llena el formulario con los datos del caza
        this.avionForm.patchValue({
          nombre: caza.nombre,
          modelo: caza.modelo,
          anoFabricacion: caza.anoFabricacion,
          descripcion: caza.descripcion
        });
      })
      .catch(error => {
        console.error('Error al obtener el caza:', error);
      });
  }


  ngOnInit(): void {

    this.avionForm = this.fb.group({
      nombre: ['', Validators.required],
      modelo: ['', Validators.required],
      anoFabricacion: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      descripcion: ['', [Validators.required]]
    });

    // Obtener el id del caza desde la url
    this.id = String(this.route.snapshot.paramMap.get('id') || '')
    this.obtenerCaza();
  }

  onSubmit() {
    if (this.avionForm.valid) {
      const avion = this.avionForm.value;
      console.log(avion);
      this.cazasService.updateCaza(this.id, avion).subscribe(
        (data) => {
          alert('Datos actualizados');
          navigator
          this.avionForm.reset();
        },
      (error) =>{
        this.error = error;
      });
    }
  }
}
