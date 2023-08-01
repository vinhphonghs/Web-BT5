import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | null = null;

  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log(this.user);
      } else this.user = null;
    });
  }
  loginWithGoogle() {
    let provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  logOut() {
    return signOut(this.auth);
  }
}
