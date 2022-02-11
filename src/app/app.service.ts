import { Injectable } from '@angular/core';
import { Product } from './firebase/product';

@Injectable()
export class AppService {
private products = [
  { id: 1, name: 'SchwarzeNacht', type: 'black-tea' },
]
  constructor() { }

  getDeals() {
    this.products;
  }
}
