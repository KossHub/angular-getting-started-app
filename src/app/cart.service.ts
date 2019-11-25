import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IProduct } from './shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProduct[] = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product: IProduct): void {
    this.items.push(product);
  }

  getItems(): IProduct[] {
    return this.items;
  }

  clearCart(): IProduct[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Observable<any> {
    return this.http.get('/assets/shipping.json');
  }
}
