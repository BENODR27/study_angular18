import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

const routes: Routes = [
  
  { path: '', component:ProductListComponent},
  { path: 'create', component:ProductCreateComponent},
  { path: 'edit/:id', component:ProductEditComponent},
  { path: 'view/:id', component:ProductViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
