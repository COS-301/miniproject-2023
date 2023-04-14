describe('Register Page Test', () => {

  beforeEach(() => {
    cy.viewport(390, 844);
    cy.visit('http://localhost:4200/register');
  });

  it('Displays Content', () => {
    cy.get('ion-content').should('be.visible');
  });

  it('Contains Register Form', () => {
    cy.get('form').should('be.visible');
    cy.get('ion-button').contains("Register").should('be.visible');
  });

  it('Contains Email Input field', () => {
    cy.get('ion-input[formControlName="email"]')
    .find('input')
    .should('have.attr', 'type', 'email');
  });

  it('Contains Password Input field', () => {
    cy.get('ion-input[formControlName="password"]')
    .find('input')
    .should('have.attr', 'type', 'password');
  });

  it('Contains Login Option', () => {
    cy.get('ion-text').contains('Login').should('be.visible');
  });

  it('Navigates to Login Page', () => {
    cy.get('ion-text').contains('Login').click();
    cy.url().should('include', '/login');
  });
})
