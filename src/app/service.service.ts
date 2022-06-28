import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<any>("http://localhost:8092/getbooks");
  }
  addBook(user:any){
    return this.http.get("http://localhost:8092/addbook?id="+user.id+"&name=" + user.name +"&author=" + user.author);
  }
  deletebook(id:any){
    return this.http.get("http://localhost:8092/deletebook/?id="+id)
  }

}

