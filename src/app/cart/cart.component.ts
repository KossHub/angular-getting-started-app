import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CartService } from '../cart.service';
import { IProduct } from '../shared/interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items: IProduct[];
  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
    console.log('FORM', this.checkoutForm);
  }

  onSubmit(customerData: string): void {
    console.log('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
