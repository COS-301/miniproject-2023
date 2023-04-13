export class SetError {
  static readonly type = '[Errors] SetError';
  constructor(public readonly error: string | null) { }
}

export class SetSuccess {
  static readonly type = '[Errors] SetSuccess';
  constructor(public readonly message: string | null) { }
}
