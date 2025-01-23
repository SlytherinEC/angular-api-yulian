import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CazasService } from '../cazas.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgIf, NgFor],
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

  editCaza(id: number): void {
    this.cazasService.getCazaById(id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        this.error = 'An error occurred while fetching the caza.';
      }
    );
  }

  delCaza(id: number): void {
    this.cazasService.deleteCaza(id).subscribe(
      (data) => {
        this.loadCazas();
      },
      (error) => {
        this.error = 'An error occurred while deleting the caza.';
      }
    );
  }
}