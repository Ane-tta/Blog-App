import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-area',
  templateUrl: './promo-area.component.html',
  styleUrls: ['./promo-area.component.css']
})
export class PromoAreaComponent implements OnInit {

    cat1 = 'food';
    cat2 = 'health';
    cat3 = 'lifestyle';
    
  constructor() { }

  ngOnInit() {
  }

}
