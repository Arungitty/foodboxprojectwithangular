import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodimages',
  templateUrl: './foodimages.component.html',
  styleUrls: ['./foodimages.component.css']
})

export class FoodimagesComponent {

  constructor(private router:Router){}

  buyNowFood(){
    this.router.navigate(['purchaseitemdetails'])
  }

}

