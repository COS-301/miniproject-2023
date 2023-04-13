import { User } from '@angular/fire/auth';

export class SubscribeToAuthState {
  static readonly type = '[Auth] SubscribeToAuthState';
}

export class SetUser {
  static readonly type = '[Auth] SetUser';
  constructor(public readonly user: User | null) { }
}

export class Login {
  static readonly type = '[Auth] Login';
  constructor(
    public readonly email: string,
    public readonly password: string
  ) { }
}

export class Register {
  static readonly type = '[Auth] Register';
  constructor(
    public readonly email: string,
    public readonly password: string
  ) { }
}

export class ContinueWithGoogle {
  static readonly type = '[Auth] ContinueWithGoogle';
}

export class Logout {
  static readonly type = '[Auth] Logout';
}

export class ContinueWithFacebook {
  static readonly type = '[Auth] ContinueWithFacebook';
}

export class SendForgotEmail {
  static readonly type = '[Auth] SendForgotEmail';
  constructor(
    public readonly email: string
  ) { }
}

export class ConfirmPasswordCode {
  static readonly type = '[Auth] ConfirmPasswordCode';
  constructor(
    public readonly code: string,
    public readonly password: string
  ) { }
}
