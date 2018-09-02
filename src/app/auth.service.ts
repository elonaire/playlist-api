import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const apiTwoUrl = "http://localhost:3000/users";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getLogin(){
    return this.http.get(`${apiTwoUrl}/login`);
  }
}
