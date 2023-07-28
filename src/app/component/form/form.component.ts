import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  myForm = new FormGroup({ });
  name: FormControl<string | null> = new FormControl('');
  price: FormControl<number | null> = new FormControl(0);
  quantity: FormControl<number | null> = new FormControl(0);
  description: FormControl<string|null> = new FormControl('');

  constructor(){
    this.myForm.addControl('name', this.name);
    this.myForm.addControl('price', this.price);
    this.myForm.addControl('quantity', this.quantity);
    this.myForm.addControl('description', this.description);
  }

   submit(){
    console.log(this.myForm.value);
   }
}
