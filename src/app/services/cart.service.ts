import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  listCart: Item[] = [];
  constructor() {}
  addCart(item: Item) {
    let index = this.listCart.findIndex((i) => i.id == item.id);
    if (index == -1) {
      this.listCart.push({
        ...item,
        quantity: 1,
      });
    } else {
      this.listCart[index].quantity++;
      console.log(this.listCart[index].quantity);
    }
  }
}
