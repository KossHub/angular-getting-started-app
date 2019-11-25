import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../shared/products';
import { CartService } from '../cart.service';
import { IProduct } from '../shared/interfaces';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.product = products[Number(params.get('productId'))];
    });
  }

  addToCart(product: IProduct): void {
    console.log('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}
