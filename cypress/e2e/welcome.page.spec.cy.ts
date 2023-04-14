describe('Welcome Page Test', () => {

  beforeEach(() => {
    cy.viewport(390, 844);
    cy.visit('http://localhost:4200/');
  });

  it('Displays Content', () => {
    cy.get('ion-content').should('be.visible');
  });

  it('navigates to login page', () => {
    cy.get('ion-button').contains('Login').click();
    cy.url().should('include', '/login');
  });

  it('Navigates to register page', () => {
    cy.get('ion-button').contains('Register').click();
    cy.url().should('include', '/register');
  });

  it("Navigates to Terms of Service", () => {
    cy.get('ion-button').contains('Terms of Service').click();
    cy.url().should('include', '/tos');
  });

  it("Navigates to Privacy Policy", () => {
    cy.get('ion-button').contains('Privacy Policy').click();
    cy.url().should('include', '/privacy');
  });
})
