import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "https://api.spotify.com/v1";
const apiTwoUrl = "/users";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response){
    let body = res;
    return body || {};
  }

  getArtist(id: string){
    let url = `${apiUrl}/artists/${id}`;
    return this.http.get(url);
  }

  getLogin(){
    return this.http.get(`${apiTwoUrl}/login`);
  }
}
