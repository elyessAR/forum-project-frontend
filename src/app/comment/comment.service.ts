import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentPayload } from './comment.payload';
import { Observable } from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) { }

  getAllCommentsForPost(postId: number): Observable<CommentPayload[]> {
    return this.httpClient.get<CommentPayload[]>('http://localhost:8080/api/comments/by-post/' + postId);
  }

  postComment(CommentPayload: CommentPayload): Observable<any> {

    const headers = new HttpHeaders().set("Authorization", this.localStorage.retrieve('authenticationToken'));

    return this.httpClient.post('http://localhost:8080/api/comments/', CommentPayload, {    
        observe: 'response',    
        headers: headers           
    });
  }

  getAllCommentsByUser(name: string) {
    return this.httpClient.get<CommentPayload[]>('http://localhost:8080/api/comments/by-user/' + name);
  }
}