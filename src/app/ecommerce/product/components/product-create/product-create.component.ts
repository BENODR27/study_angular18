import { Component } from '@angular/core';
import { Product } from '../../models/product.models';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  newProduct: Product = { title: '', price: 0,category:'', description: '',image:'' };

  constructor(private productService: ProductService, private router: Router) {}

  addProduct(): void {
    this.productService.addProduct(this.newProduct).subscribe(() => {
      this.productService.addProduct(this.newProduct);
      this.router.navigate(['/ecom/products']);
    });
  }
}
