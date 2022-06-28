import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  getcustomers(){
    return this.http.get<any>("http://localhost:8092/getcustomers");
  }
  addcustomer(user:any){
    return this.http.get("http://localhost:8081/addcustomer?id="+user.id+"&name=" + user.name +"&gmail=" + user.gmail+"&mobile="+user.mobile);
  }
  deletecustomer(id:any){
    return this.http.get("http://localhost:8092/deletecustomer/?id="+id)
  }
}
