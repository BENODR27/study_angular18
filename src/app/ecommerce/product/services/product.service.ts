import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.models';
import { HttpService } from '../../../core/http.service';
import { ECOM_API_ENDPOINTS as EAE } from '../../utils/ecom-api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl =EAE.API_URL+EAE.PRODUCTS;

  constructor(private httpService: HttpService) {}

  getProducts(): Observable<Product[]> {
    return this.httpService.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.httpService.get<Product>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.httpService.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpService.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.httpService.delete<void>(`${this.apiUrl}/${id}`);
  }

  patchProduct(id: number, product: Partial<Product>): Observable<Product> {
    return this.httpService.patch<Product>(`${this.apiUrl}/${id}`, product);
  }
  
}
