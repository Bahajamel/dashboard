import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private storageService: StorageService) { }

  getData(api:string): Observable<any> {
    const token = this.storageService.getToken();
    console.log('Token:', token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.storageService.getToken(),
    });

    return this.http.get<any>(api, { headers: headers });
  }
}
