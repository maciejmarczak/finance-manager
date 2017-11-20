export class LoginForm {
  constructor(public email: string = '',
              public password: string = '') {}

  public resetPassword(): void {
    this.password = '';
  }
}
