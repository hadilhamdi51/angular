import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  API_URL: string= 'http://localhost:3000/mail/';
  headers = new HttpHeaders().set('content-Type','application/json');
 
  constructor(
    private httpClient:HttpClient
  ) { }
  sendmail(user:User):Observable<any>{
    return this.httpClient.post(`${this.API_URL}/sendmail`,user).pipe(
      catchError(this.handleError)
    )
  }

  handleError(error:HttpErrorResponse){
    let msg='';
    if(error.error instanceof ErrorEvent){
     msg=error.error.message;
    }else{
     msg=`Error Code:${error.status}\nMessage:${error.message}`;
    }
    return throwError(msg);
   }
 }
 
