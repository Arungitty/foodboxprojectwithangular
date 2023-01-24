import { HttpClientModule } from
 '@angular/common/http';
import { NgModule } from
 '@angular/core';
import { BrowserModule } from
 '@angular/platform-browser';

import { AppRoutingModule } from
 './app-routing.module';
import { AppComponent } from
 './app.component';
import { UserComponent } from
 './user/user.component';
import { FormComponent } from
 './form/form.component';
import { FormsModule, ReactiveFormsModule } from
 '@angular/forms';

import { UserdetailsComponent }from
 './userdetails/userdetails.component';
import { EditUserComponent } from
 './edit-user/edit-user.component';
import { PurchaseitemComponent } from
 './purchaseitem/purchaseitem.component';
import { PurchaseitemdetailsComponent } from
 './purchaseitemdetails/purchaseitemdetails.component';

import { ViewdetailComponent }
 from './viewdetail/viewdetail.component';
import { DataServiceService }
 from './data-service.service';
import { PaymentComponent }
 from './payment/payment.component';
import { FoodimagesComponent }
 from './foodimages/foodimages.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FormComponent,
    UserdetailsComponent,
    EditUserComponent,
    PurchaseitemComponent,
    PurchaseitemdetailsComponent,
    ViewdetailComponent,
    PaymentComponent,
    FoodimagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }