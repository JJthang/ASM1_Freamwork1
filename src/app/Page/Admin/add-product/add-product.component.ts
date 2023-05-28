import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";
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
    name : [''],
    price : [0],
    description : [''],
  })
  handSubmit(){
    this.service.Add_product(this.proDuctForm.value).subscribe(data => {
      console.log("Them sản phầm thàn công");
      this.route.navigateByUrl("/Admin/Show_Product")
    })

    
  }
}
