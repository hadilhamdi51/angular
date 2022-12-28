import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../model/claim';


@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  private baseUrl = 'http://localhost:8089/claims/';  

  constructor(private http:HttpClient) { }  
  
   
  getClaim(id: number): Observable<any> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}get/${id}`,{headers});
  }
  
  createClaim(Claim: Object): Observable<Object> {  
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}`+'save',Claim,{headers});  
  
  }  
  updateClaim(id: number, value: any): Observable<Object> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}update/${id}`, value,{headers});
  }
  getClaimsList(etat:number): Observable<any> {

    return this.http.get(`${this.baseUrl}etat/${etat}`);

  }
  getClaimsUserList(idu:number): Observable<any> {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}user/${idu}`,{headers});

  }
  
  
  
  
    
  }  