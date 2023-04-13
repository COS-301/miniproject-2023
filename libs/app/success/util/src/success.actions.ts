export class SetSuccess {
    static readonly type = '[Errors] SetSuccess';
    constructor(public readonly message: string | null) { }
}