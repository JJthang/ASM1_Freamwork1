import { Component } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-show-product-client-detail',
  templateUrl: './show-product-client-detail.component.html',
  styleUrls: ['./show-product-client-detail.component.css']
})
export class ShowProductClientDetailComponent {
  product : any = [];
  constructor(private service : ServiceService){
    this.service.GET_product().subscribe(data =>{
      this.product = data
    })
  }
}
