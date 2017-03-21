import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { Post } from '../../post';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-page-post',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.css']
})
export class PagePostComponent implements OnInit {

   post:Post[];

  constructor(
      private route: ActivatedRoute,
      private _firebaseService: FirebaseService
  ) { }

  ngOnInit() {
      this.getPost();
  }
  
  getPost(){
      this.route.params
            .switchMap((params:Params)=>this._firebaseService.getPost( params['page'] ))
            .subscribe(post => {this.post = post;});
  }

}
