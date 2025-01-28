import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CazasService } from '../cazas.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {

  cazas: any[] = [];
  error: string = '';

  constructor(private cazasService: CazasService) { }

  ngOnInit(): void {
    this.loadCazas();
  }

  loadCazas(): void {
    this.cazasService.getCazas().subscribe(
      (data) => {
        this.cazas = data;
      },
      (error) => {
        this.error = 'An error occurred while fetching the cazas.';
      }
    );
  }

  editCaza(id: String): void {
    console.log(id);
  }

  delCaza(id: String): void {

    // Mostrar prompt de confirmación
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este caza?');

    // Si el usuario confirma, procedemos a eliminar
    if (confirmacion) {
      this.cazasService.deleteCaza(id).subscribe(
        (data) => {
          console.log('Caza eliminado:', data);
          this.loadCazas(); // Recargar la lista de cazas después de eliminar
        },
        (error) => {
          console.error('Error al eliminar el caza:', error);
          this.error = 'Ocurrió un error al intentar eliminar el caza.';
        }
      );
    }
  }
}