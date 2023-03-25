import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../models/Posts';
import { Responses } from '../models/responses';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private alkabotApiUrl = "https://jsonplaceholder.typicode.com/posts";


  constructor(private http:HttpClient) { }

  getPosts():Observable<Responses<Posts[]>>{
    return this.http.get<Responses<Posts[]>>(this.alkabotApiUrl);
  }
}
