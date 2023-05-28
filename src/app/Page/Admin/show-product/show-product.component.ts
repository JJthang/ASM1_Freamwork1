import { Component } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent {
  product : any = [];
  constructor(private service : ServiceService){
    this.service.GET_product().subscribe(data => {
      this.product = data;
      console.log(this.product);
      
    })
  }
  OnDelete(id : any){
    if (confirm('Are you sure you want to delete this')) {
      this.service.DELETE_product_ID(id).subscribe(data => {
        this.product = this.product.filter((product : any) => product.id != id)
      })
    }

  }

}
