import { Injectable } from '@angular/core';
import { Post } from './post';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  private postUpdates = new Subject<Post[]>();
  private posts: Post[] = [];

  constructor(private http: HttpClient) { }

  getPosts(){
    // return[...this.posts];
    // this.postUpdates.next([...this.posts]);
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
    .subscribe((res)=>{
      this.posts = res.posts;
      this.postUpdates.next([...this.posts]);
    });
  }

  addPost(post: Post){
    this.posts.push(post);
    this.postUpdates.next([...this.posts]);
  }

  updatedPosts(){
    return this.postUpdates.asObservable();
  }
}
