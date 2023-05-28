import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayOutAdminComponent } from './Layout/Admin/lay-out-admin/lay-out-admin.component';
import { AddProductComponent } from './Page/Admin/add-product/add-product.component';
import { ShowProductComponent } from './Page/Admin/show-product/show-product.component';

const routes: Routes = [
    {
        path : "Admin", component: LayOutAdminComponent , children: [
            {path : "", redirectTo: "Add_Product", pathMatch : "full"},
            {path : "Add_Product", component : AddProductComponent},
            {path : "Show_Product", component : ShowProductComponent},
            {path : "Detail_Product/:id", component : ShowProductComponent},

        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }