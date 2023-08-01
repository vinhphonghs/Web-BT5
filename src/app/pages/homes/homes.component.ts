import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})

export class HomesComponent {
  constructor(
    protected cartService: CartService,
    protected dataService: DataService
  ) {}
  addCart(item: Item) {
    console.log(item);
    this.dataService.listItem.forEach((element) => {
      if (element.id == item.id) {
        if (element.quantity > 0) {
          element.quantity -= 1;
          this.cartService.addCart(item);
        } else {
          alert('Out of stock');
        }
      }
    });
  }
}
