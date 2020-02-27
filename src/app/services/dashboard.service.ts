import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
url:string="https://localhost:44346/api/dashboard/";
  constructor(
    private http: HttpClient
    ) {
    
   }

  //  authenticate(authModel: any) {
  //   let url ="";
  //   var reqHeaderOcta = new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS', 'Content-Type': 'application/json','Accept': 'application/json' });
  //   return this.http.post(url, authModel, {headers:reqHeaderOcta});

  // }

  getDashboard() {
     this.url =this.url+"get";
    
    var reqHeaderOcta = new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS', 'Content-Type': 'application/json','Accept': 'application/json' });
    return this.http.get(this.url);

  }
  isAuthenticated():boolean {
    return !!localStorage.getItem('token');
  }
}


