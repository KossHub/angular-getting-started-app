import { Component } from '@angular/core';

import { products } from '../shared/products';
import { IProduct } from '../shared/interfaces';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = products;

  share(): void {
    console.log('The product has been shared!');
  }

  onNotify(): void {
    console.log('You will be notified when the product goes on sale.');
  }
}
