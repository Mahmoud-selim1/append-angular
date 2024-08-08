import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApifunctionsService<type> {
  //private myUrl = 'http://localhost:3000/blogs';
  constructor(
    protected http: HttpClient,
    @Inject(String) public myUrl: string,
    protected router: Router
  ) {}
  get(): Observable<type> {
    return this.http.get<type>(this.myUrl);
  }
  getById(id: any): Observable<type> {
    return this.http.get<type>(this.myUrl + `/${id}`);
  }
  create(obj: any): Observable<type> {
    return this.http.post<type>(this.myUrl, obj);
  }
  delete(id: any): Observable<type> {
    return this.http.delete<type>(this.myUrl + `/${id}`);
  }
  put(id: any, obj: any): Observable<type> {
    return this.http.put<type>(this.myUrl + `/${id}`, obj);
  }
  auth() {
    if (localStorage.getItem('admin')) {
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
