import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-show-product-client-detail',
  templateUrl: './show-product-client-detail.component.html',
  styleUrls: ['./show-product-client-detail.component.css']
})
export class ShowProductClientDetailComponent {
  product : any = {};
  constructor(private service : ServiceService, private Get_id : ActivatedRoute){
    this.Get_id.params.subscribe(params => {
      this.service.GET_product_ID(params).subscribe(data => {
        this.product = data
      })
    })

  }
}
