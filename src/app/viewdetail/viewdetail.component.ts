import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { PaymentdetailClass } from '../PaymentdetailClass';

@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit{

  constructor(private service:DataServiceService, private activatedRoute:ActivatedRoute){}
  
  payment:PaymentdetailClass
  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getPaymentDetailById(Number(id)).subscribe(res=>this.payment=res)
  }



}
