import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private baseUrl = 'http://localhost:8089/clubs/';  

  constructor(private http:HttpClient) { }  
  
   
  getClub(id: number): Observable<any> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}get/${id}`,{headers});
  }
  
  createClub(Club: Object): Observable<Object> {  
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}`+'save',Club,{headers});  
  
  } 
  getClubresp(id: number): Observable<any> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}resp/${id}`,{headers});
  } 

  getClaimsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  

}
