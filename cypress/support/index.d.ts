declare namespace Cypress {
  interface Chainable {
    login(email: string, password: string): Chainable<void>;
    register(username: string, email: string, password: string): Chainable<void>;
  }
}
