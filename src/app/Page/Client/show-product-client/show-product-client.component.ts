import { Component } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-show-product-client',
  templateUrl: './show-product-client.component.html',
  styleUrls: ['./show-product-client.component.css']
})
export class ShowProductClientComponent {
  product : any = [];
  constructor(private service : ServiceService){
    this.service.GET_product().subscribe(data =>{
      this.product = data
    })
  }
}
