describe('Privacy Policy Page Test', () => {

  beforeEach(() => {
    cy.viewport(390, 844);
    cy.visit('http://localhost:4200/privacy');
  });

  it('Displays Content', () => {
    cy.get('ion-content').should('be.visible');
  });

  it('Displays Personal Information Policy', () => {
    cy.get('ion-card-title').contains('Personal Information');
  });

  it('Displays What Information is Collected Policy', () => {
    cy.get('ion-card-title').contains('What Information We Collect');
  });

  it('Displays Information Usage Policy', () => {
    cy.get('ion-card-title').contains('What we use your Information for');
  });

  it('Displays 3rd Party Services\' Policy', () => {
    cy.get('ion-card-title').contains('3rd Party Services');
  });
})
