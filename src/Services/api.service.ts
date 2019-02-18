import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, from } from 'rxjs'
import { API } from 'src/app/app-config'

const httpOptions = {
  headers: new HttpHeaders({
    'Content_Type': 'applications/json',
    'Authorization': 'Token '
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api: string = API;

  constructor(private http: HttpClient) { }

  login(params: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content_Type': 'applications/json',
      })
    }
    return this.http.post(`${this.api}login/`,{params}, httpOptions)
  }

}
