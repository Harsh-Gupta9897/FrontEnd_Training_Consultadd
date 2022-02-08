import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Author } from './user.interface';
// import htt
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) {}
    
    getAuthors(): Observable<Author[]>{
      return this.http.get<Author[]>("https://jsonplaceholder.typicode.com/posts");
    }
}
