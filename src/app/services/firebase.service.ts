import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Category } from '../category';
import { Post } from '../post';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
   post: FirebaseListObservable<Post[]>;
   posts: FirebaseListObservable<Post[]>;
   categories: FirebaseListObservable<Category[]>;
   categoryPosts: FirebaseListObservable<Post[]>;
   
   constructor(private _af: AngularFire) { }
   
   getPostsByCategory(name: string = null):Observable<Post[]> {
      this.categoryPosts = this._af.database.list('/posts', {
         query: {
            orderByChild: 'category',
            equalTo: name
         }
      }) as FirebaseListObservable<Post[]>;
      return this.categoryPosts;
   }
    
   getCategories() {
      this.categories = this._af.database.list('/categories') as FirebaseListObservable<Category[]>;
      return this.categories;
   }
   
   getPost(name: string = 'post-0'):FirebaseListObservable<Post[]>{
      this.post = this._af.database.list('/posts', {
         query: {
            orderByChild: 'postUrl',
            equalTo: name,
            limitToFirst: 1
         }
      }) as FirebaseListObservable<Post[]>;
      return this.post;
   }

   getPosts() {
      this.posts = this._af.database.list('/posts').map( (res) => res.reverse() ) as FirebaseListObservable<Post[]>;
      return this.posts;
   }

}
