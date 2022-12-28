import { HttpHeaders,HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: string= 'http://localhost:3000/user/';
  headers = new HttpHeaders().set('content-Type','application/json');
 

  constructor(
    private httpClient:HttpClient
  ) { }
  register(user:User):Observable<any>{
    return this.httpClient.post(`${this.API_URL}/register`,user).pipe(
      catchError(this.handleError)
    )
  }

  login(user:User):Observable<any>{
    return this.httpClient.post(`${this.API_URL}/login`,user).pipe(
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
