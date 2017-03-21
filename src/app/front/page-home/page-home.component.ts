import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Post } from '../../post';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  constructor(private _firebaseService:FirebaseService) { }
   
   posts:Post[];

  ngOnInit() {
     this.getPosts();
  }
   
   getPosts(){
      this._firebaseService.getPosts().subscribe(
         posts => {this.posts = posts;}
      );
   }

}
