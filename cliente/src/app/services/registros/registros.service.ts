import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  public apiUrl = `http://localhost:3000/register/new`;

  constructor( private http: HttpClient, private router: Router, private route: ActivatedRoute ) {}

 addRegistro(registro: {
       id:number, 
       nombre:string, 
       email:string, 
       password:string,
       rol:string}): Observable<any> {
       return this.http.post(this.apiUrl, registro);
     }

}
