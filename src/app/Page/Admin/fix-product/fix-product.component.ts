import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-fix-product',
  templateUrl: './fix-product.component.html',
  styleUrls: ['./fix-product.component.css']
})
export class FIXProductComponent {
  product : any = {};
  constructor(private formbuilder : FormBuilder, private service : ServiceService, private route : Router, private Get_id : ActivatedRoute){
  this.Get_id.params.subscribe(params => {
    this.service.GET_product_ID(params).subscribe(data => {
      this.product = data;
      this.proDuctForm.patchValue({
        name : this.product.name,
        price : this.product.price,
        description : this.product.description,
      })
    })
  })
  }
  proDuctForm = this.formbuilder.group({
    name : ['', [Validators.required, Validators.minLength(4)]],
    price : [0,[Validators.required]],
    description : ['',[Validators.required]],
  })
  handSubmit(){
    
    if (!this.proDuctForm.valid) {
      alert("Xin vui long nhap lai");
      return;
    }
    const product = {
      id : this.product.id,
      name : this.proDuctForm.value.name,
      price : this.proDuctForm.value.price,
      description : this.proDuctForm.value.description,
    }
    this.service.PUT_product_ID(product).subscribe(data => {
      alert("Xửa Thành công")
      this.route.navigateByUrl("/Admin/Show_Product")
    })
    
  }
}
