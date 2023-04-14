describe('Welcome Page Test', () => {

  beforeEach(() => {
    cy.viewport(390, 844);
    cy.visit('http://localhost:4200/tos');
  });

  it('Displays Content', () => {
    cy.get('ion-content').should('be.visible');
  });
})
