import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../models/Posts';
import { Users } from '../models/Users';
import { Comments } from '../models/Comments';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getPosts():Observable<Posts[]>{
    return this.http.get<Posts[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getUsers():Observable<Users[]>{
    return this.http.get<Users[]>("https://jsonplaceholder.typicode.com/users");
  }

  getComments(idPost:number):Observable<Comments[]>{
    return this.http.get<Comments[]>("https://jsonplaceholder.typicode.com/posts/"+idPost+"/comments");
  }
}
