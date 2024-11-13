import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  product: Product = { title: '', price: 0,category:'', description: '',image:'' };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(id).subscribe(product => this.product = product);
  }

  updateProduct(id:any): void {
    this.productService.updateProduct(id, this.product).subscribe(() => {
      
    });
    this.router.navigate(['ecom/products']);
  }
}
