import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormationService  {
  private baseUrl = 'http://localhost:8089/formations/';  

  constructor(private http:HttpClient) { }  
  
   
  getFormation(id: number): Observable<any> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}get/${id}`,{headers});
  }
  
  createFormation(Formation: Object): Observable<Object> {  
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}`+'save', Formation,{headers});  
  
  }  
  updateFormation(id: number, value: any): Observable<Object> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}update/${id}`, value,{headers});
  }
  delFormation(id: number): Observable<any> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}delete/${id}`,{headers});
  }
  getFormationsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
    
  }  