import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CazasService {

  private baseUrl = 'https://cazas.free.beeceptor.com';
  // private baseUrl = 'https://cazas.free.beeceptor.com/api';

  constructor(private http: HttpClient) { }

  // Obtener todos los cazas
  getCazas(): Observable<any> {
    return this.http.get<any>(`https://cazas.free.beeceptor.com/api/cazas`);
  }

  // Obtener un caza por id
  getCazaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/cazas/${id}`);
  }

  // Crear un caza
  createCaza(caza: any): Observable<any> {
    return this.http.post(`https://cazas.free.beeceptor.com/api/cazas`, caza);
  }

  // Actualizar un caza
  updateCaza(id: number, caza: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/cazas/${id}`, caza);
  }

  // Eliminar un caza
  deleteCaza(id: number): Observable<any> {
    return this.http.delete(`https://cazas.free.beeceptor.com/api/cazas/${id}`);
  }

}
