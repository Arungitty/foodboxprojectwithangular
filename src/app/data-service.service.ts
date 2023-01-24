import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable, observable, throwError } from 'rxjs';
import { UserClass } from './UserClass';

import { catchError } from 'rxjs/operators';
import { PaymentdetailClass } from './PaymentdetailClass';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  //url:https://jsonplaceholder.typicode.com/users
  //url:string="https://jsonplaceholder.typicode.com/users";
  url:string="http://localhost:8082/api/user/";
  url1:string="http://localhost:8082/api/paydetails/";

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  id:any


  //inject the DI
  constructor(private http: HttpClient) { }


  //get all users
  getAllUser():Observable<UserClass[]>{
      return this.http.get<UserClass[]>(this.url);
  }

  //get all Paymentdetails
  getAllPaymentDetails():Observable<PaymentdetailClass[]>{
    return this.http.get<PaymentdetailClass[]>(this.url1);
}

  //delete user by id
  deletePost(id:number) {
    let endPoints = id;
    this.http.delete(this.url + endPoints).subscribe(data => {
       return this.getAllUser();
    });
  }

  // get user by id
   getUserById(id:number):Observable<UserClass>{
   
    return this.http.get<UserClass>(this.url+(id));
   }

   


   // get customer by id
  getPaymentDetailById(id:number):Observable<PaymentdetailClass>{
    return this.http.get<PaymentdetailClass>(this.url1+id);
   }

   //post
  create(data: any): Observable<any> {                              // data is a new value which we will post
    return this.http.post(this.url, data).pipe(
      catchError(this.handleError)
      );
  }

  //update
  updateUser(user:UserClass,id:number){
    return this.http.put(this.url+id,user)
  }

   // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };


  //load image

}