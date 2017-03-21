import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { FirebaseService } from '../../services/firebase.service';
import { Post } from '../../post';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.css']
})
export class PageCategoryComponent implements OnInit {

   posts:Post[];
  constructor(
      private route: ActivatedRoute,
      private _firebaseService: FirebaseService
  ) { }

    ngOnInit() {
      this.getPostsByCategory();
    }
    
    getPostsByCategory(){
       this.route.params
         .switchMap((params: Params) => this._firebaseService.getPostsByCategory(params['name']))
         .subscribe(posts => {this.posts = posts;});
    }

}
