describe('Post Page', () => {
  it('Display Content', () => {
    cy.viewport(390, 844);
    cy.visit('http://localhost:4200/');
    cy.get('ion-content').should('be.visible');
  });

  it('Register Tag selection', () => {
    cy.viewport(390, 844);
    cy.visit('http://localhost:4200/');
    cy.get('ion-select').click();
    cy.get('ion-alert').within(() => {
      cy.contains('button.select-interface-option', 'Fitness').click();
      cy.contains('OK').click();
    })
    cy.get('ion-select').should('contain', 'Fitness');
  });

  it('Submit Post', () => {
    cy.viewport(390, 844);
    cy.visit('http://localhost:4200/');
    cy.get('ion-button').contains('Submit').click();
    cy.get('ion-toast').should('be.visible');
  });
})
