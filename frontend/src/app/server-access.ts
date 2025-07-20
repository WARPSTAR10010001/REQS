import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { REQ } from './req';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerAccess {
  constructor(private http: HttpClient){}

  getAllREQS(): Observable<REQ[]> {
    return this.http.get<REQ[]>(`http://localhost:1000/get/`);
  }

  getREQ(id: number): Observable<REQ> {
    return this.http.get<REQ>(`http://localhost:1000/get/${id}`);
  }

  getLatestREQ(): Observable<REQ> {
    return this.http.get<REQ>(`http://localhost:1000/get/latest`);
  }

  newREQ(newREQ: REQ) {
    return this.http.post(`http://localhost:1000/new`, newREQ);
  }

  updateREQ(updateREQ: REQ, id: number) {
    return this.http.put(`http://localhost:1000/update/${id}`, updateREQ);
  }

  deleteREQ(id: number) {
    return this.http.delete(`http://localhost:1000/remove/${id}`);
  }
}