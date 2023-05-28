import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayOutAdminComponent } from './Layout/Admin/lay-out-admin/lay-out-admin.component';
import { AddProductComponent } from './Page/Admin/add-product/add-product.component';
import { ShowProductComponent } from './Page/Admin/show-product/show-product.component';
import { FIXProductComponent } from './Page/Admin/fix-product/fix-product.component';
import { LayOutClientComponent } from './Layout/Client/lay-out-client/lay-out-client.component';
import { ShowProductClientComponent } from './Page/Client/show-product-client/show-product-client.component';
import { ShowProductClientDetailComponent } from './Page/Client/show-product-client-detail/show-product-client-detail.component';

const routes: Routes = [
    {
        path : "Admin", component: LayOutAdminComponent , children: [
            {path : "", redirectTo: "Add_Product", pathMatch : "full"},
            {path : "Add_Product", component : AddProductComponent},
            {path : "Show_Product", component : ShowProductComponent},
            {path : "Detail_Product/:id", component : FIXProductComponent},
        ],
    },
    {      
         path : "", component: LayOutClientComponent , children: [
        {path : "", redirectTo: "Product", pathMatch : "full"},
        {path : "Product", component : ShowProductClientComponent},
        {path : "Product/:id", component : ShowProductClientDetailComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }