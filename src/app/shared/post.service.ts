import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './post-model';
import { Observable } from 'rxjs';
import { CreatePostPayload } from '../post/create-post/create-post.payload';
import {HttpHeaders} from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient,private localStorage:LocalStorageService) { }

  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/');
  }

 

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>('http://localhost:8080/api/posts/' + id);
  }

  getAllPostsByUser(name: string): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('http://localhost:8080/api/posts/by-user/' + name);
  }
  createPost(postPayload: CreatePostPayload): Observable<any> {

    const headers = new HttpHeaders().set("Authorization", this.localStorage.retrieve('authenticationToken'));

    return this.http.post('http://localhost:8080/api/posts/', postPayload, {    
        observe: 'response',    
        headers: headers           
    });
  }

}
