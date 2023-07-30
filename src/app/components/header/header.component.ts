import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('cart') dialog: ElementRef<HTMLDialogElement> | undefined;
  constructor(public router: Router){

  }
  goToCart() {
    this.router.navigate(['/cart']);
  }
  showDialog() {
    this.dialog?.nativeElement.showModal();
  }
  close() {
    this.dialog?.nativeElement.close();
  }
}
