import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FoodimagesComponent } from './foodimages/foodimages.component';
import { FormComponent } from './form/form.component';
import { PaymentComponent } from './payment/payment.component';
import { PurchaseitemComponent } from './purchaseitem/purchaseitem.component';
import { PurchaseitemdetailsComponent } from './purchaseitemdetails/purchaseitemdetails.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';


const routes: Routes = [
  {"path":"users",component:UserComponent},
  {"path":"form",component:FormComponent},
  {"path":"details/:id",component:UserdetailsComponent},
  {"path":"edit/:id",component:EditUserComponent},
  {"path":"purchaseitem",component:PurchaseitemComponent},
  {"path":"purchaseitemdetails",component:PurchaseitemdetailsComponent},
  {"path":"viewdetail/:id",component:ViewdetailComponent},
  {"path":"payment",component:PaymentComponent},
  {"path":"foodimages",component:FoodimagesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
