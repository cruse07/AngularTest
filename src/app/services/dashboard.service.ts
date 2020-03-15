import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url: string = "https://localhost:44346/api/dashboard/";
  Baseurl: string = "http://localhost:50159/api/";
  set: string = "Values/set";
  notify: string = "Values/notify";
  skippableHttpClient: HttpClient;
  constructor(private http: HttpClient, private handler: HttpBackend) {
    //this.skippableHttpClient= new HttpClient(handler);
  }

  getDashboard() {
    this.url = this.url + "get";

    var reqHeaderOcta = new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS', 'Content-Type': 'application/json', 'Accept': 'application/json' });
    return this.http.get(this.url);

  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  SetValue(isSkippable: boolean) {

    this.http = isSkippable ? new HttpClient(this.handler) : this.http;
    let model = {
      "FirstName": "sample string 1",
      "LastName": "sample string 2"
    }
    this.url = this.Baseurl + this.set;
    return this.http.post(this.url, model);
  }

  getValue() {

    this.url = this.Baseurl + this.notify;
    return this.http.get(this.url);
  }
  searchCountry(key: string) {
    this.url = "http://localhost:50159/api/Values/search/" + key;
    return this.http.get(this.url);
  }
  switchCountry(key: string):Observable<string[]> {
    this.url = "http://localhost:50159/api/Values/search/" + key;
    return this.http.get<string[]>(this.url).pipe(tap(
      x=>x.length? console.log(" records found "+ x.length): console.log("no record found")
    ));
  }

}


