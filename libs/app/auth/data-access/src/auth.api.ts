import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  sendPasswordResetEmail,
  confirmPasswordReset
} from '@angular/fire/auth';
import { signOut } from '@firebase/auth';

@Injectable()
export class AuthApi {
  constructor(private readonly auth: Auth) { }

  auth$() {
    return authState(this.auth);
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async continueWithGoogle() {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  async logout() {
    return await signOut(this.auth);
  }

  async continueWithFacebook() {
    const provider = new FacebookAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  async forgotPassword(email: string) {
    await sendPasswordResetEmail(this.auth, email);
  }

  async acceptCode(code: string, password: string) {
    return await confirmPasswordReset(this.auth, code, password);
  }
}
