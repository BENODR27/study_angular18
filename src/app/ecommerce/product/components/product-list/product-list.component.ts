import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.models';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
    products: Product[] = [];
    constructor(private productService: ProductService) {}
    ngOnInit(): void {
      this.productService.getProducts().subscribe(products => this.products = products);
    }
}
  
  

