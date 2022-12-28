import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private baseUrl = 'http://localhost:8089/competitions/';  

  constructor(private http:HttpClient) { }  
  getCompetition(id: number): Observable<any> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}get/${id}`,{headers});
  }
  
  
  
  createCompetition(Competition: Object): Observable<Object> {  
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}`+'save', Competition,{headers});  
  
  }  
  updateCompetition(id: number, value: any): Observable<Object> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}update/${id}`, value,{headers});
  }

  delCompetition(id: number): Observable<any> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}delete/${id}`,{headers});
  }
  
  getCompetitionsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
    
  }  