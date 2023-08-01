import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  constructor(public dataService: DataService, public cartService: CartService) { 
    this.listItem = this.cartService.listCart
  }
  listItem: Item[]=[]
  
}
