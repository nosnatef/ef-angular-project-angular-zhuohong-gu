import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) { }

  getAll(path: string) : Observable<any[]>{
    return this.http
      .get(`${environment.apiUrl}${path}`)
      .pipe(map(resp => resp as any[]));
  }

  deleteOne(path:string, id: number) : Observable<{}>{
    const url = `${environment.apiUrl}${path}/${id}`;
    return this.http.delete(url);
  }

  updateOne(path:string, id:number,body) : Observable<{}>{
    const url = `${environment.apiUrl}${path}/${id}`;
    return this.http.patch(url,body)
  }

  postOne(path:string, body) : Observable<{}>{
    const url = `${environment.apiUrl}${path}`;
    return this.http.post(url,body);
  }

  getOne(path:string, id: number) : Observable<any>{
    const url = `${environment.apiUrl}${path}/${id}`
    return this.http.get(url);
  }

}
