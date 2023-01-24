import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { PaymentdetailClass } from '../PaymentdetailClass';

@Component({
  selector: 'app-purchaseitemdetails',
  templateUrl: './purchaseitemdetails.component.html',
  styleUrls: ['./purchaseitemdetails.component.css']
}) 
export class PurchaseitemdetailsComponent implements OnInit{

  constructor(private service:DataServiceService){ }

  payD:PaymentdetailClass[]
  

  ngOnInit(): void {
    this.service.getAllPaymentDetails().subscribe(result=>this.payD=result);
    console.log(this.payD)
  }



}
