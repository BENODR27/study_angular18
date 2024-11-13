import { Injectable } from '@angular/core';

import { loadProducts, loadProductsSuccess, loadProductsFailure } from './product.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../services/product.service';

@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(()=> 
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() => this.productService.getProducts().pipe(
        map(products => loadProductsSuccess({ products })),
        catchError(error => of(loadProductsFailure({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
