import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CazasService {

  private baseUrl = 'https://cazas.free.beeceptor.com/api';
  // private baseUrl = 'http://localhost:3000/api';
  idCaza: String = '';

  constructor(private http: HttpClient) { }

  // Obtener todos los cazas
  getCazas(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/cazas`);
  }

// Obtener un caza por ID utilizando Promises
getCazaById(id: String): Promise<any> {
  return firstValueFrom(this.http.get<any>(`${this.baseUrl}/cazas/${id}`));
}
  // Crear un caza
  createCaza(caza: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/cazas`, caza);
  }

  // Actualizar un caza
  updateCaza(id: String, caza: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/cazas/${id}`, caza);
  }

  // Eliminar un caza
  deleteCaza(id: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/cazas/${id}`);
  }

}
