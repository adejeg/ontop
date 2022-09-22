import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  base_url = environment.server;
  constructor(private http: HttpClient) { };
  
  getData(endpoint: string): Promise<any> {
    return this.http.get(this.base_url + endpoint).toPromise();
  }
}
