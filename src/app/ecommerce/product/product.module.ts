import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductCreateComponent, //declare here if component is not standalone
    ProductEditComponent,
    ProductListComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule // FormsModule is an Angular module that provides support for template-driven forms
    ]
})
export class ProductModule { }
