
describe('app', () => {

    it('should visit the home page', () => {
      cy.visit('/welcome');
      cy.contains('Login'); // Asserts that the text 'Welcome to my app!' exists on the page.
      cy.contains('Register'); // Asserts that the text 'Welcome to my app!' exists on the page.
    });
  
    it('should navigate to privacy page',{includeShadowDom: true}, () => {
      cy.visit('/welcome');
      cy.get('ion-row').should('be.visible').contains(' Privacy Policy ').click({ force: true });
      cy.url().should('include', '/privacy'); 
      cy.contains('This privacy policy explains'); 
    });

    it('should navigate to Terms and conditions',{includeShadowDom: true}, () => {
        cy.visit('/welcome');
        cy.get('ion-row').should('be.visible').contains(' Terms of Service ').click({ force: true }); 
        cy.url().should('include', '/tos'); 
        cy.contains('Terms of Service');
      });
  });
  