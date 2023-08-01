import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('cart') dialog: ElementRef<HTMLDialogElement> | undefined;
  constructor(protected router: Router, public authservice: AuthService) {}
  goToCart() {
    this.router.navigate(['/cart']);
  }
  goToHome() {
    this.router.navigate(['']);
  }
  goToStorage() {
    this.router.navigate(['/storage']);
  }
  signIn() {
    this.authservice.loginWithGoogle();
  }
  signOut() {
    if (confirm('Are you sure?') == true) {
      this.authservice.logOut();
      alert('Sign out successfully!');
    }
  }
}
