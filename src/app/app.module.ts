import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddProductComponent } from './Page/Admin/add-product/add-product.component';
import { ShowProductComponent } from './Page/Admin/show-product/show-product.component';
import { LayOutAdminComponent } from './Layout/Admin/lay-out-admin/lay-out-admin.component';
import { FIXProductComponent } from './Page/Admin/fix-product/fix-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ShowProductComponent,
    LayOutAdminComponent,
    FIXProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
