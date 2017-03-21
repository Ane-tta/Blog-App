import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Category } from '../../category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   
  categories:Category[];

  constructor(private _firebaseService:FirebaseService) { }

  ngOnInit() {
      this.getCategories()
  }
   
   getCategories(){
      this._firebaseService.getCategories().subscribe(
        categories => { this.categories = categories; }
      );
   }

}
