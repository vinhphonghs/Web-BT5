import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Output() closeDialog = new EventEmitter();
  close() { 
    this.closeDialog.emit();
  }
  constructor(public dataService: DataService) { 

  }

  total() {
    let total = 0;
    for (let item of this.dataService.listItem) {
      total += item.price * item.quantity;
    }
    return total;
  }
}

