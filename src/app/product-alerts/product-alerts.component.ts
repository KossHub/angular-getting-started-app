import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { IProduct } from '../shared/interfaces';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent {
  @Input() product: IProduct;
  @Output() notify: EventEmitter<any> = new EventEmitter();
}
