import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'springboot';
  books:any;
  customer:any;
  constructor(private service:ServiceService,private customerservice: CustomerService){}
  ngOnInit():void {
    this.loadData();
    this.loadData1();
  }
  loadData():void{
    this.service.getAll().subscribe(response =>{
      this.books=response;
      console.log(this.books);

    })
  }
  loadData1():void {
    this.customerservice.getcustomers().subscribe(response=>{
      this.customer=response;
      console.log(this.customer);
    })
  }
  addId=0;
  addName="";
  addAuthor="";
  addBook(){
    var newbook={
      "id":this.addId,
      "name":this.addName,
      "author": this.addAuthor

    };
    this.service.addBook(newbook).subscribe(response => {
      var data =response;
      console.log(response);
    })
    this.addAuthor="";
    this.addName="";
    this.addId=0;
    this.loadData();
  }
  deleteId=0;
  deletebook(){
    this.service.deletebook(this.deleteId).subscribe(response =>{
      console.log(response);
      
    })
    this.loadData();
  }
  

}
