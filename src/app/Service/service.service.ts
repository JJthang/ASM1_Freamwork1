import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }
  Add_product(data : any){
    return this.http.post("http://localhost:3000/product", data)
  }
  GET_product(){
    return this.http.get("http://localhost:3000/product")
  }
  GET_product_ID({id} : any){
    console.log(id);
    return this.http.get("http://localhost:3000/product/" +id)
  }
  DELETE_product_ID(id : any){
    return this.http.delete("http://localhost:3000/product/"+id)
  }
  PUT_product_ID(data : any){
    return this.http.put("http://localhost:3000/product/"+data.id, data)
  }
}
