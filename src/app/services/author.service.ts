import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private _http: HttpClient) { }

  get(id: number): Observable<Author> {
    return this._http.get<Author>('http://localhost:3000/authors/'+id);
  }

  getAll():Observable<Author[]> {
    return this._http.get<Author[]>('http://localhost:3000/authors');
  }

  create(author: Author):Observable<Author> {
    return this._http.post<Author>('http://localhost:3000/authors', author);
  }

  update(id: number,author: Author):Observable<Author> {
    return this._http.put<Author>('http://localhost:3000/authors/'+id, author);
  }

  delete(id: number): Observable<any> {
    return this._http.delete<any>('http://localhost:3000/authors/'+id);
  }
}
