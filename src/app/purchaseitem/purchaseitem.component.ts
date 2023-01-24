import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchaseitem',
  templateUrl: './purchaseitem.component.html',
  styleUrls: ['./purchaseitem.component.css']
})
export class PurchaseitemComponent {

  constructor(private router:Router){}

  buyNow(){
    this.router.navigate(["foodimages"])
  }

}
