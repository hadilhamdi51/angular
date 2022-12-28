
import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class ReclamationService {  
  
  private baseUrl = 'http://localhost:8089/reclamations/';  

  constructor(private http:HttpClient) { }  
  
  getReclamation(id: number): Observable<any> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}get/${id}`,{headers});
  }
  
  createReclamation(Reclamation: Object): Observable<Object> {  
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}`+'save', Reclamation,{headers});  

  } 
   
  updateReclamation(id: number, value: any): Observable<Object> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}update/${id}`, value,{headers});
  }
  
  deleteReclamation(id: number): Observable<any> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/${id}`,{headers});
  }

  getReclamationsList(): Observable<any> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}`,{headers});
  }
    
}  