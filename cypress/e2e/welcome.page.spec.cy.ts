describe('Welcome Page Test', () => {

  it('Displays Content', () => {
    cy.viewport(390, 844);
    cy.visit('http://localhost:4200/');
    cy.get('ion-content').should('be.visible');
  });

  it('navigates to login page', () => {
    cy.viewport(390, 844);
    cy.visit('http://localhost:4200/');
    cy.get('ion-button').contains('Login').click();
    cy.url().should('include', '/login');
  });

  it('Navigates to register page', () => {
    cy.viewport(390, 844);
    cy.visit('http://localhost:4200/');
    cy.get('ion-button').contains('Register').click();
    cy.url().should('include', '/register');
  });

  it("Navigates to Terms of Service", () => {
    cy.viewport(390, 844);
    cy.visit('http://localhost:4200/');
    cy.get('ion-button').contains('Terms of Service').click();
    cy.url().should('include', '/tos');
  });

  it("Navigates to Privacy Policy", () => {
    cy.viewport(390, 844);
    cy.visit('http://localhost:4200/');
    cy.get('ion-button').contains('Privacy Policy').click();
    cy.url().should('include', '/privacy');
  });
})
