import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private formbuilder : FormBuilder, private service : ServiceService, private route : Router){
  }
  proDuctForm = this.formbuilder.group({
    name : ['',[Validators.required, Validators.minLength(4)]],
    price : [0, [Validators.required]],
    description : ['',[Validators.required]],
  })
  handSubmit(){
    if (!this.proDuctForm.valid) {
      alert("Xin vui long nhap lai");
      return;
    }
    this.service.Add_product(this.proDuctForm.value).subscribe(data => {
      console.log("Them sản phầm thàn công");
      this.route.navigateByUrl("/Admin/Show_Product")
    })
  }
}
