import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { timestamp } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class formComponent implements OnInit {

  listItem: Item[] = [];

  myForm = new FormGroup({ });
  name: FormControl<string | null> = new FormControl('');
  price: FormControl<number | null> = new FormControl(0);
  quantity: FormControl<number | null> = new FormControl(0);
  description: FormControl<string|null> = new FormControl('');
  img: FormControl<string|null> = new FormControl('');

  ngOnInit(): void {
      console.log(this.listItem.length != 0 ? this.listItem: 'No items in list' 
        );
  }

  constructor(protected dataService: DataService){
    this.myForm.addControl('name', this.name);
    this.myForm.addControl('price', this.price);
    this.myForm.addControl('quantity', this.quantity);
    this.myForm.addControl('description', this.description);
    this.myForm.addControl('img', this.img);
    this.listItem = this.dataService.listItem;
  }

   submit(){
    let item = <Item>
    {
      id: Date.now().toString(),
      name: this.name.value,
      price: this.price.value,
      quantity: this.quantity.value,
      description: this.description.value,
      img: this.img.value
    }
    

    this.listItem.push(item);

  this.dataService.addItem(item);
   }
}
