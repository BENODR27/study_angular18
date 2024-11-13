import { Action, createReducer, on } from '@ngrx/store';
import { loadProducts, loadProductsSuccess, loadProductsFailure } from './product.actions';
import { Product } from '../models/product.models';

export interface ProductState {
  products: Product[];
  error: any;
}

export const initialState: ProductState = {
  products: [],
  error: null
};

const _productReducer = createReducer(
  initialState,
  on(loadProducts, state => ({ ...state })),
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products })),
  on(loadProductsFailure, (state, { error }) => ({ ...state, error }))
);

export function productReducer(state: ProductState | undefined, action: Action) {
  return _productReducer(state, action);
}
