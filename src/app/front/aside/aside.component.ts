import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Category } from '../../category';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
   
   categories:Category[];

  constructor(private _firebaseService:FirebaseService) { }

  ngOnInit() {
     this.getCategories();
  }
   
   getCategories(){
      this._firebaseService.getCategories().subscribe(
        categories => { this.categories = categories; }
      );
   }

}
